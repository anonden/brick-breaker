<template>
    <div :id="'brick_' + props.index" class="brick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "BrickComponent"
})
</script>
<script lang="ts" setup>
import { useBallStore } from '@/store/ballStore'
import { defineProps, onMounted, watch } from 'vue'
import { clamp } from '@/functions/generalFunctions'
import { useBrickStore } from '@/store/brickStore'

const props = defineProps({
    index: {type: Number, required: true},
})

let pos: DOMRect
let customPos: {right: number, left: number, bottom: number, top: number}

const ballStore = useBallStore()
const brickStore = useBrickStore()

function collisionMovement(detected: string){
    brickStore.removeElementFromLayout(props.index, detected)
}

function saveCurrentPosition(){
    const brick = document.getElementById('brick_' + props.index)
    if(brick){
        pos = brick.getBoundingClientRect()
        customPos = {
            right : pos.right + ballStore.getBallSize/2,
            left: pos.left - ballStore.getBallSize/2,
            bottom: pos.bottom + ballStore.getBallSize/2,
            top: pos.top - ballStore.getBallSize/2
        }
    }
}

watch(() => ballStore.getBallPosition, (newValue) => {
    const xValues = clamp(newValue.x, customPos.right, customPos.left)
    if(!xValues.clampNeedeed){
        const YValues = clamp(newValue.y, customPos.bottom, customPos.top)
        if(!YValues.clampNeedeed){

            let left = newValue.x - pos.left
            let right = pos.right - newValue.x
            let top = newValue.y - pos.top
            let bottom = pos.bottom - newValue.y
            let min = Math.min(left, right, top, bottom)
            let detected
            if(min == bottom || min == top){
                detected = 'vertical'
            }else{
                detected = 'horizontal'
            }

            collisionMovement(detected)
        }
    }

})

onMounted(() => {
    saveCurrentPosition()
})
</script>

<style lang="scss">
.brick{
    width: calc(100% - 2px);
    height: 2vh;
    background-color: gray;
    box-shadow: 0 0 0 1px black;
    margin-bottom: 1px;
    border-radius: 5px;
}
</style>