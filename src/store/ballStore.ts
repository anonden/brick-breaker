import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { XYPair } from '@/components/interfaces'

export const useBallStore = defineStore('ballStore', () => {
    const ballPosition = ref({x: 0, y: 0})
    const ballSize = ref(20)
    const moveVector = ref({x: 5, y: 5})

    const getBallPosition = computed(() => ballPosition.value)
    const getBallSize = computed(() => ballSize.value)
    const getVector = computed(() => moveVector.value)

    function changeBallPosition(newPosition: XYPair){
        ballPosition.value = newPosition
    }

    function changeBallSize(newSize: number){
        ballSize.value = newSize
    }

    function changeVector(newVector: XYPair){
        moveVector.value = newVector
    }

    function mirrorVectorX(){
        moveVector.value.x = -moveVector.value.x
    }

    function mirrorVectorY(){
        moveVector.value.y = -moveVector.value.y
    }


    return {
        getBallPosition, 
        getBallSize,
        getVector, 
        changeBallPosition, 
        changeBallSize,
        changeVector,
        mirrorVectorX,
        mirrorVectorY,
    }
})