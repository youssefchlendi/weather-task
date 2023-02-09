import { RouteRecordRaw } from 'vue-router';

export const weatherRoutes: Array<RouteRecordRaw> = [
	{
		path: '/weather',
		name: 'CurrentWeather',
		component: () => import('./views/weather-task.vue')
	}
]