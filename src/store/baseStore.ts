import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { XYPair } from '@/components/interfaces'

export const useBaseStore = defineStore('baseStore', () => {
    const basePosition = ref({x: 0, y: 0})
    const baseSize = ref({x: 0, y: 0})

    const getBasePosition = computed(() => basePosition.value)
    const getBaseSize = computed(() => baseSize.value)

    function changeBasePosition(newPosition: XYPair){
        changeBasePositionX(newPosition.x)
        changeBasePositionY(newPosition.y)
    }

    function changeBasePositionX(newPosition: number){
        basePosition.value.x = newPosition
    }

    function changeBasePositionY(newPosition: number){
        basePosition.value.y = newPosition
    }

    function changeBaseSize(newSize: XYPair){
        baseSize.value = newSize
    }

    function changeBaseWidth(newWidth: number){
        baseSize.value.x = newWidth
    }



    return {
        getBasePosition,
        getBaseSize,
        changeBasePosition, 
        changeBasePositionX,
        changeBaseSize, 
        changeBaseWidth,
    }
})