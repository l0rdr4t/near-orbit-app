<template>
    <div>
        <h2 @click="this.oauth2()">Authenticating...</h2>
    </div>
</template>

<script>

export default {
    name: 'LoginDiscordMain',
    methods: {
        oauth2() {
            this.$auth
                .oauth2('discord', {
                    url: 'https://discord.com/api/oauth2/token?grant_type=authorization_code',
                    code: true,
                    data: {
                        client_id: 109608642122115081,
                        client_secret: 'LRRp2JELpmuiXsYIhLEhgAbSeHUl5njA',
                        redirect_uri: 'https://nearorbit.app/login',
                        code: this.$route.query.code
                    },
                    state: this.$route.query.state
                });
        }
    }
}
</script>