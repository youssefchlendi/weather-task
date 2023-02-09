<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="tab1" href="/weather/current">
					<img :src="getWeatherImageUrl(currentWeather?.weather[0].icon,'2x')" />
					<ion-label>Current {{ formatTemperature(currentWeather?.temp,"F") }}</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab2" href="/weather/forecast">
					<ion-icon :icon="calendarOutline" />
					<ion-label>Forecast</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import { useWeather } from '@/weather/services/weather.service';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { calendarOutline } from 'ionicons/icons';
const { currentWeather, formatTemperature, getWeatherImageUrl } = useWeather();
</script>

<style scoped>
img {
	width:26px;
	height:26px;
	margin-bottom:0;
	margin-top:3px;
	background-color: skyblue;
	border-radius: 100%;
	
}
</style>
