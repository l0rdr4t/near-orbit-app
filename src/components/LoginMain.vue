<template>
    <div>
        <span v-show="!$auth.ready()">
            Loading...
        </span>

        <span v-show="$auth.ready()">
            Ready!
        </span>
    </div>
    <div>
        <h2>welcome to nearOrbit.app</h2>
        <button @click="oauth2">Login with Discord</button>
        <button @click="showToken">Show token {{ $store.state.token.data.access_token }}</button>
        <button @click="showDiscordImage">Welcome {{ username }}</button>
        <img :src="discordImage">
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginMain',
    data() {
        return {
            discordImage: "https://duckduckgo.com/_next/static/media/logo-horizontal-dark.53712807.svg",
            username: "",
        }
    },
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
        },
        showToken() {
            this.$store.state.token = JSON.parse(localStorage.getItem('discordToken')) || 'No data stored';
        },
        showDiscordImage() {
            axios.get('https://discord.com/api/users/@me', {
                headers: {
                    Authorization: 'Bearer ' + this.$store.state.token.data.access_token
                }
            })
            .then(response => {
                this.discordImage = 'https://cdn.discordapp.com/avatars/' + response.data.id + '/' + response.data.avatar + '.png';
                this.username = response.data.username;
            })
            .catch(err => {
                alert(err.toString());
            })

        }
    }
}
</script>