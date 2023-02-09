import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { OneWeather } from "../models/weather.models";

const apiKey = "b7bed957715ceda237f558f8e9126a44";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`

const weather = ref<OneWeather>();

export function useWeather() {
	return {
		weather,
		fetchWeather,
	}
}

async function fetchWeather(){
	console.log("Fetchig weather");
	const { coords } = await Geolocation.getCurrentPosition();
	const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}`);
	weather.value = await response.json();

}