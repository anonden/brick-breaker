<template>
  <div class="scene">
    <game-over-component v-if="!htmlGameStore.getGameStatus"/>
    <base-component/>
    <ball-component/>
  </div>
</template>

<script lang="ts">
import GameOverComponent from "../components/GameOverComponent.vue"
import BallComponent from "../components/BallComponent.vue";
import BaseComponent from "../components/BaseComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameView",
  components: { BallComponent, BaseComponent, GameOverComponent },
},);
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useGameStore } from "@/store/gameStore";
const htmlGameStore = ref(useGameStore())
onMounted(() => {
  console.log("mounted gameview")
})
</script>

<style lang="scss" scoped>
.scene{
  width: 100%;
  height: 100%;
  cursor: none;

}
</style>
