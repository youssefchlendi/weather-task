<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Forecast Weather</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
				<ion-refresher-content></ion-refresher-content>
			</ion-refresher>
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-grid>
				<ion-row class="ion-justify-content-center">
					<ion-col size="auto">
						<forecast-weather></forecast-weather>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonRefresher, IonRefresherContent } from '@ionic/vue';
import ForecastWeather from "@/weather/views/forecast-weather.vue";
import { useWeather } from "@/weather/services/weather.service";
import { watch } from 'vue';
const { fetchForecastWeather, loadingForecastWeather } = useWeather()
const handleRefresh = (event: CustomEvent) => {
	fetchForecastWeather();
	watch(loadingForecastWeather, (value) => {
		if (!value) {
			event.detail.complete();
		}
	});

};

</script>
