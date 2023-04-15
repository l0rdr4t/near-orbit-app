<template>
    <div>
        <h2>Authenticating...</h2>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from "vue-router";
import { onMounted } from 'vue';

const route = useRoute()
const req = {
    code: route.query.code,
    state: route.query.state
}
onMounted(async () => {
    const res = await axios.post('https://nearorbit.app/.netlify/functions/handleAuth', req).then(alert("done."));
    alert(res.toString());
})

</script>