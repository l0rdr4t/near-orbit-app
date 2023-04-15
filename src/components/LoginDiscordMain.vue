<template>
    <div>
        <h2>Authenticating...</h2>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from "vue-router";
import { onMounted } from 'vue';
import store from '../store'

const route = useRoute()
const req = {
    code: route.query.code,
    state: route.query.state
}

onMounted(
    axios.post('https://nearorbit.app/.netlify/functions/handleAuth', req)
    // axios.post('http://localhost:8888/.netlify/functions/handleAuth', req)
    .then(response => {
        store.commit('setToken',response.data);
        alert(response.data);
        window.close();
    })
)

</script>