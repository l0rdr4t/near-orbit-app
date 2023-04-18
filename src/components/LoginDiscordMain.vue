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
            authTarget: process.env.VUE_APP_AUTH_TARGET
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
            const req = {
                code: this.$route.query.code,
                state: this.$route.query.state
            }
            axios.post(this.authTarget, req)
                .then(response => {
                    const token = response.data;
                    this.$store.commit('setToken', token);
                })
                .catch(e => {
                    const token = e.toString();
                    alert("error: " + token);
                });
            window.close();
        }
    }
}
</script>