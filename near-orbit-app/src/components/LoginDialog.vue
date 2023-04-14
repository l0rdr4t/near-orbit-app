<template>
    <div>
        <h2>welcome to nearOrbit.app</h2>
        <button @click="discordLogin()">Login with Discord</button>
    </div>
</template>

<script>

export default {
    name: 'LoginDialog',
    methods: {
        discordLogin() {
            this.$login(`/redirection/test`, (response) => {
                console.log(response.data['isAuthenticated']) // true or false
                this.user = response.data['user']; // save user in session
                window.location.href = response.data['redirect']; // for redirect to page
            })

            this.$disconnect(() => {
                //callback

                window.location.href = "/"; // redirect to /
            })
        }
    }
};



</script>