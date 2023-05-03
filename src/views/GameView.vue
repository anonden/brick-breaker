<template>
  <div class="scene">
    <base-component/>
    <ball-component/>
  </div>
</template>

<script lang="ts">
import BallComponent from "@/components/BallComponent.vue";
import BaseComponent from "@/components/BaseComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { BallComponent, BaseComponent },
},);
</script>

<style lang="scss" scoped>
.scene{
  width: 100%;
  height: 100%;
  cursor: none;

}
</style>
