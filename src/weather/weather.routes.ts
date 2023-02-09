import { RouteRecordRaw } from 'vue-router';

export const weatherRoutes: Array<RouteRecordRaw> = [
	{
		path: '/current',
		name: 'CurrentWeather',
		component: () => import('../views/CurrentWeatherTab.vue')
	},
	{
		path: '/forecast',
		name: 'ForecastWeather',
		component: () => import('../views/ForecastWeatherTab.vue')
	}
]