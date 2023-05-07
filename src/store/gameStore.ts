import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGameStore = defineStore('gameStore', () => {
    const gameIsRunning = ref(true)

    const getGameStatus = computed(() => gameIsRunning.value)

    function changeGameStatus(gameStatus: boolean){
        gameIsRunning.value = gameStatus
    }



    return {
        getGameStatus,
        changeGameStatus
    }
})