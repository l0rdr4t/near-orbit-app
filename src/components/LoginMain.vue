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
                    params: {
                        client_id: '1096086421221150812',
                        prompt: 'none'
                        },
                    remember: 'Rob',
                    staySignedIn: true,
                    fetchUser: true,
                    window: {
                        name: '_blank',
                        specs: {},
                        replace: false
                    }
                });
        }
    }
}
</script>