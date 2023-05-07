<template>
    <div class="brick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "BrickComponent"
})
</script>
<script lang="ts" setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps({
    index: Number,
})

onMounted(() => {
    console.log(props.index)
})
</script>

<style lang="scss">
.brick{
    width: calc(100% - 2px);
    height: 2vh;
    background-color: gray;
    box-shadow: 0 0 0 1px black;
    margin-bottom: 1px;
    border-radius: 5px;
}
</style>