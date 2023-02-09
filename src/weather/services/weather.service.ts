import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { CurrentWeather, DailyWeather, OneWeather } from "../models/weather.models";

const apiKey = "b7bed957715ceda237f558f8e9126a44";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`

const currentWeather = ref<CurrentWeather>();

export function useWeather() {
	return {
		currentWeather,
		fetchCurrentWeather,
		formatTemperature,
		getWeatherImageUrl,
	}
}

async function fetchCurrentWeather(){
	console.log("Fetchig weather");
	const { coords } = await Geolocation.getCurrentPosition();
	const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=b7bed957715ceda237f558f8e9126a44&lat=1&lon=1");
	const res = await response.json();

	currentWeather.value = new CurrentWeather(
		res.main.feels_like,
		res.main.humidiy,
		res.sys.sunrise,
		res.sys.sunset,
		res.main.temp,
		res.weather,
		res.wind.speed,

	);
}

function formatTemperature(value: number, format: 'F' | 'C' = "C") {
	return `${Math.round(value)}° ${format} `
}

function getWeatherImageUrl(iconName: string, size: '2x' | '4x') {
	return `http://openweathermap.org/img/wn/${iconName}@${size}.png`;
}