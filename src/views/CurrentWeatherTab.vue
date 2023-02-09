<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Current Weather</ion-title>
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
						<current-weather></current-weather>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import CurrentWeather from "@/weather/views/current-weather.vue";
</script>
