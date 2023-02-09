<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Forecast Weather</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import ForecastWeather from "@/weather/views/forecast-weather.vue";
</script>
