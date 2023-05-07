<template>
  <div class="brickContainer">
    <div v-for="(brick, index) in bricks" :key="index">
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
  import { onMounted, ref } from "vue"
  import { Brick } from "./interfaces";

  const bricks = ref(new Array<Brick>())

  function createBrickLayout(n = 500){
    for(let i = 0; i < n; ++i){
      bricks.value[i] = {exists: Math.random() < 0.5, type: 'normal'}
    }
  }

  onMounted(() => {
    createBrickLayout()
  })
  </script>
  
  <style lang="scss" scoped>
  .brickContainer{
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }
  </style>
  