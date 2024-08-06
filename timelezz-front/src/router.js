import { createMemoryHistory, createRouter } from 'vue-router'


import App from './App.vue'
import HomeView from './components/HomeView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/app', component: HomeView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router