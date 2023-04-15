import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@picocss/pico'
import axios                  from 'axios';
import {createAuth}          from './custom-modules/websanova/vue-auth';
import driverAuthBearer      from './custom-modules/websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from './custom-modules/websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from './custom-modules/websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Discord    from './custom-modules/websanova/vue-auth/dist/drivers/oauth2/discord.esm.js';

var auth = createAuth({
    plugins: {
        router: router,
        http: axios
    },
    drivers: {
        http: driverHttpAxios,
        auth: driverAuthBearer,
        router: driverRouterVueRouter,
        oauth2: {
            discord: driverOAuth2Discord,
        }
    },
    options: {
        rolesKey: 'type',
        notFoundRedirect: {name: 'user-account'},
    }
});

createApp(App)
.use(store)
.use(router)
.use(auth)
.mount('#app')