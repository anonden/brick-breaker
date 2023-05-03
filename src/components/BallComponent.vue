<template>
    <div id="ball" class="ball" :style="{
        height: htmlBallStore.getBallSize + 'px'
    }"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "BallComponent"
})
</script>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { calculateAngleFromCos, clamp, distanceBetweenPoints, valueInRange } from '@/functions/generalFunctions'
import { useBallStore } from "@/store/ballStore";
import { useBaseStore } from '@/store/baseStore';

let ball: any
let intervalNumber = 8
let keepGoing = true
let ballStore = useBallStore()
let htmlBallStore = ref(useBallStore())
let baseStore = useBaseStore()

function checkForCollision(){
    let yLevel = ballStore.getBallPosition.y >= baseStore.getBasePosition.y - ballStore.getBallSize
    let xLevel = valueInRange(ballStore.getBallPosition.x, baseStore.getBasePosition.x + baseStore.getBaseSize.x, baseStore.getBasePosition.x)

    return yLevel && xLevel
}

function collisionMovement(){
    addHitAnimation()
    let baseCenterX = baseStore.getBasePosition.x + baseStore.getBaseSize.x / 2
    let baseCenter = {x: baseCenterX, y: baseStore.getBasePosition.y}
    
    let ballX = ballStore.getBallPosition.x - ballStore.getVector.x
    let ballY = ballStore.getBallPosition.y - ballStore.getVector.y
    let previousBall = ({x: ballX, y: ballY})

    let aWidth = baseStore.getBaseSize.x / 2
    let bWidth = distanceBetweenPoints(baseCenter, previousBall)
    let cWidth = distanceBetweenPoints(baseStore.getBasePosition, previousBall)

    const alpha = calculateAngleFromCos(aWidth, bWidth, cWidth)
    const flippedAlpha = Math.PI - alpha

    let oldC =  Math.sqrt(Math.pow(ballStore.getVector.x, 2) + Math.pow(ballStore.getVector.y, 2)) 
    let newY = oldC * Math.sin(flippedAlpha)
    let newX = oldC * Math.cos(flippedAlpha)

    ballStore.changeVector({x: newX, y: -newY})
}

function nonCollisionMovement(changedVector = false){
    let newXValue = clamp(ballStore.getBallPosition.x + ballStore.getVector.x, window.innerWidth - ballStore.getBallSize)
    let newYValue = clamp(ballStore.getBallPosition.y + ballStore.getVector.y, window.innerHeight - ballStore.getBallSize)

    ballStore.changeBallPosition({x: newXValue.value, y: newYValue.value})
      
    ball.style.left = newXValue.value + 'px'
    ball.style.top = newYValue.value + 'px'

    if(newYValue.value == window.innerHeight - ballStore.getBallSize){
        keepGoing = false
    }

    if(!changedVector){
        newXValue.clampNeedeed && ballStore.mirrorVectorX()
        newYValue.clampNeedeed && ballStore.mirrorVectorY()
    }
}

function increment(){
    let collided = checkForCollision()
    collided && collisionMovement()
    nonCollisionMovement(collided)

    setTimeout(() => {   
        keepGoing && requestAnimationFrame(increment)
    }, intervalNumber);
}

function startBall(){   
    if(!ball){
        ball = document.getElementById(('ball'))
        initBallSize()
        initVector()
    }

    ball && requestAnimationFrame(increment)
}

function initBallSize(){
    let ballsize = Math.max(window.innerWidth, window.innerHeight) / 120
    ballStore.changeBallSize(ballsize)
}

function initVector(){
    let startVectorX = window.innerWidth / 200
    let startVectorY = window.innerHeight / 400

    ballStore.changeVector({x: startVectorX, y: startVectorY})
}

function addHitAnimation(){
    let base = document.getElementById('base')
    base?.classList.add('hit')
    setTimeout(() => {
        base?.classList.remove('hit')    
    }, 150);
}

onMounted(() => {
    startBall()
})

onUnmounted(() =>{
    keepGoing = false
})

</script>

<style lang="scss">
.ball{
    position: absolute;
    aspect-ratio: 1;
    border-radius: 100%;
    transition-duration: 8ms;
    transition: all linear;
    background-color: #3a3b41;

}
</style>