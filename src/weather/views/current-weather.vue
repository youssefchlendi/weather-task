<template>
	<ion-card v-if="currentWeather">
		<div class="weather-background">
			<img :src="getWeatherImageUrl(currentWeather.weather[0].icon, '4x')" />
		</div>

		<ion-card-header>
			<ion-card-subtitle>
				{{ currentWeather.weather[0].description }}
			</ion-card-subtitle>
			<ion-card-title>
				{{ formatTemperature(currentWeather.temp, 'C') }}
			</ion-card-title>
		</ion-card-header>

		<ion-card-content>
			<ion-grid>
				<ion-row>
					<ion-col>
						Feels like {{ formatTemperature(currentWeather.feels_like) }}
					</ion-col>

					<ion-col>
						Wind Speed {{ Math.round(currentWeather.wind_speed) }}
					</ion-col>
				</ion-row>

				<ion-row>
					<ion-col>
						Sunrise {{
							new Date(currentWeather.sunrise * 1000).toLocaleTimeString(undefined, {
								timeStyle:
									'short'
							})
						}}
					</ion-col>

					<ion-col>
						Sunset {{
							new Date(currentWeather.sunset * 1000).toLocaleTimeString(undefined, {
								timeStyle:
									'short'
							})
						}}
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-card-content>
	</ion-card>
</template>

<script lang="ts">
import commonIonicComponents from '@/shared/common-ionic-components';
import { defineComponent, onMounted } from 'vue'
import { useWeather } from '../services/weather.service';
export default defineComponent({
	components: {
		...commonIonicComponents
	},
	setup() {
		const { currentWeather, fetchCurrentWeather, formatTemperature, getWeatherImageUrl } = useWeather();

		onMounted(fetchCurrentWeather);


		return {
			currentWeather,
			fetchCurrentWeather,
			formatTemperature,
			getWeatherImageUrl

		}
	}
})
</script>

<style scoped>
ion-card {
	max-width: 350px;
}

ion-card img {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.weather-background {
	background-color: skyblue;
}
</style>