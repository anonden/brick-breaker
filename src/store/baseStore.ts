import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { XYPair, BaseModeType } from '@/components/interfaces'


export const useBaseStore = defineStore('baseStore', () => {
    const basePosition = ref({x: 0, y: 0})
    const baseSize = ref({x: 0, y: 0})
    const baseModes = ref(new Set<BaseModeType>())

    const getBasePosition = computed(() => basePosition.value)
    const getBaseSize = computed(() => baseSize.value)
    const getBaseModes = computed(() => baseModes.value)

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

    function addBaseMode(newMode: BaseModeType){
        baseModes.value.add(newMode)
    }

    function removeBaseMode(newMode: BaseModeType){
        baseModes.value.delete(newMode)
    }

    return {
        getBasePosition,
        getBaseSize,
        getBaseModes,
        changeBasePosition, 
        changeBasePositionX,
        changeBaseSize, 
        changeBaseWidth,
        addBaseMode,
        removeBaseMode
    }
})