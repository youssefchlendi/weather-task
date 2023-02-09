<template>
	<div>
		{{ weather }}
		<button @click="fetchWeather">fetch</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import {useWeather} from '../services/weather.service';
export default defineComponent({
	setup () {
		const { weather, fetchWeather } = useWeather();

		onMounted(fetchWeather);


		return {
			weather,
			fetchWeather
		}
	}
})
</script>

<style scoped>

</style>