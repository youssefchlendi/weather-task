import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { CurrentWeather, DailyWeather, FeelsLike, Temperature } from "../models/weather.models";

const apiKey = "b7bed957715ceda237f558f8e9126a44";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;

const currentWeather = ref<CurrentWeather>();
const forecastWeather = ref<DailyWeather[]>();

fetchCurrentWeather();
fetchForecastWeather();

setInterval(() => {
	fetchCurrentWeather();
	fetchForecastWeather();
}, 1000 * 60 * 2);

export function useWeather() {
	return {
		currentWeather,
		fetchCurrentWeather,
		formatTemperature,
		getWeatherImageUrl,
		forecastWeather,
		fetchForecastWeather
	}
}

async function fetchCurrentWeather(){
	console.log("Fetchig weather");
	const { coords } = await Geolocation.getCurrentPosition();
	const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}`);
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

async function fetchForecastWeather() {
	const { coords } = await Geolocation.getCurrentPosition();
	const response = await fetch(`${forecastUrl}&lat=${coords.latitude}&lon=${coords.longitude}`);
	const res = await response.json();

	forecastWeather.value = res.list.map((item: any) => {
		return new DailyWeather(
			item.dt,
			new FeelsLike(item.main.feels_like,item.main.feels_like,item.main.feels_like,item.main.feels_like),
			item.main.humidity,
			0,
			0,
			new Temperature(
				item.main.temp_max,
				item.main.temp_min,
			),
			item.weather,
			item.wind.speed,
		)
	});

	
}

function formatTemperature(value: number|undefined , format: 'F' | 'C' = "C") {
	return value?`${Math.round(value)}° ${format} `:'';
}

function getWeatherImageUrl(iconName: string|undefined = "04d", size: '2x' | '4x') {
	return `http://openweathermap.org/img/wn/${iconName}@${size}.png`;
}