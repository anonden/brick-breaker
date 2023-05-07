import { Brick } from '@/components/interfaces'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useBallStore } from './ballStore'

export const useBrickStore = defineStore('brickStore', () => {
	let removeLock = false
	const brickLayout = ref(new Array<Brick>())

	const getBrickLayout = computed(() => brickLayout.value)

	function changeBrickLayout(newLayout: Brick[]){
		brickLayout.value = newLayout
	}

	function removeElementFromLayout(index: number, detected: string){
		if(!removeLock){
			removeLock = true

			brickLayout.value[index].exists = false
			detected == 'horizontal' ? useBallStore().mirrorVectorX() : useBallStore().mirrorVectorY()
			
			setTimeout(() => {
					removeLock = false
			}, 1);
		}
	}

	return {
		getBrickLayout,
		changeBrickLayout,
		removeElementFromLayout
	}
})