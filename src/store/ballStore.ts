import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { XYPair } from '@/components/interfaces'

export const useBallStore = defineStore('ballStore', () => {
    const ballPosition = ref({x: 0, y: 0})
    const ballSize = ref(20)
    const moveVector = ref({x: 5, y: 5})
    const ballIsCaptured = ref(true)

    const getBallPosition = computed(() => ballPosition.value)
    const getBallSize = computed(() => ballSize.value)
    const getVector = computed(() => moveVector.value)
    const getBallIsCaptured = computed(() => ballIsCaptured.value)

    function changeBallPosition(newPosition: XYPair){
        ballPosition.value = newPosition
    }

    function changeBallPositionXByDiff(diff: number){
        ballPosition.value.x += diff
    }

    function changeBallPositionY(newY: number){
        ballPosition.value.y = newY
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

    function changeBallCapture(newValue: boolean){
        ballIsCaptured.value = newValue
    }


    return {
        getBallPosition, 
        getBallSize,
        getVector, 
        getBallIsCaptured,
        changeBallPosition,
        changeBallPositionXByDiff,
        changeBallPositionY, 
        changeBallSize,
        changeVector,
        mirrorVectorX,
        mirrorVectorY,
        changeBallCapture,
    }
})