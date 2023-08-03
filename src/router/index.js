import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/team',
        name: 'TeamView',
        component: () => import('../views/TeamView.vue')
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: () => import('../views/ContactView.vue')
    },
    {
        path: '/settings',
        name: 'SettingsView',
        component: () => import('../views/SettingsView.vue')
    },
    {
        path: "/*",
        component: 404
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router