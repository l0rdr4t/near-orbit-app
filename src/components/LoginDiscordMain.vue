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
            // replace `getPost` with your data fetching util / API wrapper
            const req = {
                code: this.$route.query.code,
                state: this.$route.query.state
            }

            alert("authTarget: " + this.authTarget);
            alert("$route.query.code: " + req.code);
            alert("$route.query.state: " + req.state);
            // axios.post('', req)
            axios.post(this.authTarget, req)
                .then(response => {
                    const token = response.data;
                    alert("success: " + token);
                    this.$store.commit('setToken', token);
                })
                .catch(e => {
                    const token = e.toString();
                    alert("error: " + token);
                });
            // window.close();
        }
    }
}
</script>