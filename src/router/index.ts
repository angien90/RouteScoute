import { createRouter, createWebHistory } from 'vue-router';
import ExplorePage from '@/views/ExplorePage.vue';
import AboutUs from '@/views/AboutUs.vue';
import SavedLocation from '@/views/SavedLocation.vue';
import MapLocation from '@/views/MapLocation.vue';
import TipsLocation from '@/views/TipsLocation.vue';

const routes = [
  { path: '/', name: 'home', component: ExplorePage },
  { path: '/about', name: 'about', component: AboutUs },
  { path: '/saved', name: 'saved', component: SavedLocation },
  { path: '/map', name: 'map', component: MapLocation },
  { path: '/tips', name: 'tips', component: TipsLocation },
  { path: '/login', name: 'login', component: () => import('@/views/LogIn.vue')},
  { path: '/create-account', name: 'CreateAccount', component: () => import('@/views/CreateAccount.vue')}
];

export default createRouter({
  history: createWebHistory(),
  routes,
});