import { RouteRecordRaw } from 'vue-router';

export const weatherRoutes: Array<RouteRecordRaw> = [
	{
		path: '/weather/current',
		name: 'CurrentWeather',
		component: () => import('../views/CurrentWeatherTab.vue')
	},
	{
		path: '/weather/forecast',
		name: 'ForecastWeather',
		component: () => import('../views/ForecastWeatherTab.vue')
	}
]