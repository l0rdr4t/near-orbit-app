<template>
    <div>
        <h2>Authenticating...</h2>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginDiscordMain',
    data() {
        return {
            loading: false,
            post: null,
            error: null,
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        )
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true
            // replace `getPost` with your data fetching util / API wrapper
            const req = {
                code: this.$route.query.code,
                state: this.$route.query.state
            }
            // axios.post('https://nearorbit.app/.netlify/functions/handleAuth', req)
            axios.post('http://localhost:8888/.netlify/functions/handleAuth', req)
                .then(response => {
                    const token = response.data;
                    alert(token);
                    this.$store.commit('setToken', token);
                    window.close();
                })
                .catch(e => {
                    const token = e.toString();
                    alert(token);
                    window.close();
                })
        }
    }
}
</script>