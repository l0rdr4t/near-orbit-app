<template>
    <LoginDiscordMain @token-response="$emit($event)" />
</template>

<script>

// @ is an alias to /src
import LoginDiscordMain from '@/components/LoginDiscordMain.vue'

export default {
    name: 'LoginDiscordView',
    components: {
        LoginDiscordMain
    }
}
</script>

<style></style>