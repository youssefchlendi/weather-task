<template>
	<ion-list v-if="forecastWeather && !loadingForecastWeather">
		<ion-list-header>
			Forecast
		</ion-list-header>
		<ion-item v-for="(daily,id) in forecastWeather" :key="id">
			<ion-avatar>
				<div class="avatar-background">
					<img :src="getWeatherImageUrl(daily.weather[0].icon, '2x')" />
				</div>
			</ion-avatar>
			<ion-label>
				<h1>
					{{ formatTemperature(daily.temp.day,"C") }}
				</h1>
				<h2>
					{{ daily.weather[0].description }}
				</h2>
				<p>
					{{new Date(daily.dt * 1000).toLocaleTimeString(undefined, {
								weekday:"long",
								year:"numeric",
								month:"long"
							})}}
				</p>
			</ion-label>
		</ion-item>
	</ion-list>
	<ion-spinner v-else></ion-spinner>
</template>

<script lang="ts">
import commonIonicComponents from '@/shared/common-ionic-components';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
import { defineComponent, onMounted } from 'vue'
import { useWeather } from '../services/weather.service';

export default defineComponent({
	components: {
		IonList,
		IonListHeader,
		IonItem,
		IonAvatar,
		IonLabel,
		...commonIonicComponents
	},
	setup () {
		const { loadingForecastWeather, forecastWeather, fetchForecastWeather, getWeatherImageUrl, formatTemperature } = useWeather()

		onMounted(fetchForecastWeather);

		return {
			forecastWeather,
			getWeatherImageUrl,
			formatTemperature,
			loadingForecastWeather
		}
	}
})
</script>

<style scoped>
.avatar-background {
	background-color: skyblue;
	border-radius:100%;
	border: 2px solid white;
}

ion-avatar {
	margin-right: 10px;
}
</style>