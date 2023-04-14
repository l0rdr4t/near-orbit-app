import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {initClient} from 'vuejs-oauth2-discord';

createApp(App)
.use(initClient, {
    host: `nearorbit.app`,
    port: 80,
    ssl: true,
    withCredentials: true,
    path: '/login',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://nearorbit.app/',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
})
.use(store)
.use(router)
.mount('#app')
