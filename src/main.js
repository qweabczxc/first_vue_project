import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import Profile from './pages/UserProfile.vue'

const routes = [
    { path: '/first_vue_project', name:'HomePage', component: HomePage},
    { path: '/first_vue_project/Profile', component: Profile }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
