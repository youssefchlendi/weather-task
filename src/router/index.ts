import { weatherRoutes } from '@/weather/weather.routes';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/weather/current'
  },
  {
    path: '/weather',
    name: '',
    component: HomePage,
	children:[
		...weatherRoutes
	]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
