<template>
  <div class="brickContainer">
    <div v-for="(brick, index) in brickStore.getBrickLayout" :key="index" class="outerBrick" >
        <brick-component v-if="brick.exists" :index="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import BrickComponent from "@/components/BrickComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BrickSceneComponent",
  components: { BrickComponent },
},);
</script>
  
<script setup lang="ts">
import { onMounted, ref, watch } from "vue"
import { Brick } from "./interfaces";
import { useBrickStore } from "@/store/brickStore";
import { useGameStore } from "@/store/gameStore";
const brickStore = ref(useBrickStore()) 
const gameStore = useGameStore()

function createBrickLayout(n = 500){
  const bricks = new Array<Brick>()

  for(let i = 0; i < n; ++i){
    bricks[i] = {exists: Math.random() < 0.5, type: 'normal'}
  }
  brickStore.value.changeBrickLayout(bricks)
}

watch(() => gameStore.getGameStatus, (newValue) => {
  newValue && createBrickLayout()
})

onMounted(() => {
  createBrickLayout()
})
</script>

<style lang="scss" scoped>
.brickContainer{
  display: grid;
  grid-template-columns: repeat(20, 1fr);
}

.outerBrick{
  min-height: 2vh;
}
</style>
