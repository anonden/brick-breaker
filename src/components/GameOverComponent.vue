<template>
    <div class="gameOverScene" @click.stop>
        <div class="gameOverfloatMenu">
            <div class="gameOverTitle">Game Over</div>
            <div class="gameOverMenu" @click="restartGame">Restart</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "GameOverComponent"
})
</script>
<script lang="ts" setup>
import { useGameStore } from '@/store/gameStore'
const gameStore = useGameStore()

function restartGame(){
    gameStore.changeGameStatus(true)
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Animations.scss';

.gameOverScene{
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.8);
    width: 100%;
    height: 100%;
    z-index: 2;
    font-size: 3vh;
    cursor: auto;
    animation: fadeIn 1.5s linear;
}


.gameOverfloatMenu{
    position: absolute;
    width: 100%;
    height: 75%;
    top: 25%;
    color: #bdadad;
}
.gameOverTitle{
    margin-bottom: 2%;
    font-size: 4vh;
    pointer-events: none;
}

.gameOverMenu{
    cursor: pointer;
    &:hover{
        color: gray;
    }
}
</style>