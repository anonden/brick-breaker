<template>
    <div id="base" class="base" :style="{
        left: baseStore.getBasePosition.x + 'px',
        top: baseStore.getBasePosition.y + 'px',
        width: baseStore.getBaseSize.x + 'px',
        height: baseStore.getBaseSize.y + 'px'
    }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "BaseComponent"
})
</script>
<script lang="ts" setup>
import { clamp } from "@/functions/generalFunctions";
import { onMounted, onUnmounted, ref } from "vue";
import { useBaseStore } from '@/store/baseStore';
import { useBallStore } from '@/store/ballStore';

let base: any
const baseStore = ref(useBaseStore())
const ballStore = useBallStore()

function initBase(){
    let float = window.innerHeight / 100
    
    let width = window.innerWidth / 10
    let height = window.innerWidth / 192
    baseStore.value.changeBaseSize({x: width, y: height})
    
    let x = window.innerWidth / 2 - baseStore.value.getBaseSize.x / 2
    let y = window.innerHeight - (height + float)
    baseStore.value.changeBasePosition({x: x, y: y})

    baseStore.value.addBaseMode('normal')

    initHandlers()
}

function mouseMoveHandler(event: MouseEvent){
    const newPosition = clamp(event.clientX, window.innerWidth - baseStore.value.getBaseSize.x - 2)
    baseStore.value.changeBasePositionX(newPosition.value)
}

function clickHandler(){
    ballStore.changeBallCapture(false)
}

function startBase(){   
    if(!base){
        base = document.getElementById(('base'))
    }
    base && initBase()
}

function initHandlers(){
    window.addEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('click', clickHandler)
}

onMounted(() => {
    console.log("base mounted")
    startBase()
})

onUnmounted(() =>{
    window.removeEventListener('mousemove', mouseMoveHandler)
    window.removeEventListener('click', clickHandler)
})


</script>

<style lang="scss">
.base{
    position: absolute;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: #b7cee4;

    &.hit{
        animation: hit 0.3s ease-in-out;
        border: 1px solid #2a4d71;
    }

    @keyframes hit{
        20%{
            transform: translateY(5%);
        }
        100%{
            transform: translateY((0%));
        }
    }
}
</style>