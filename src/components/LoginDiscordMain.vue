<template>
    <div>
        <span
            v-show="!$auth.ready()"
        >
            Loading...
        </span>

        <span
            v-show="$auth.ready()"
        >
            Ready!
        </span>
    </div>
    <div>
        <h2>welcome to nearOrbit.app</h2>
        <button @click="oauth2()">Login with Discord</button>
    </div>
</template>

<script>
export default {
    name: 'LoginMain',
    methods: {
        oauth2() {
            this.$auth
                .oauth2('discord', {
                    url: 'auth/discord',
                    code: true,
                    body: {
                        code: this.$route.query.code
                    },
                    state: this.$route.query.state
                });
        }
    }
}
</script>