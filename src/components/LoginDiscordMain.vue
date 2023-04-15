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
    const res = await axios.post('http://localhost:8888/.netlify/functions/handleAuth', req).then(alert("done."));
    alert(res.toString());
})

</script>