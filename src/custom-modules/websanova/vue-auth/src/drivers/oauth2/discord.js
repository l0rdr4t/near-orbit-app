export default {
    url: 'https://discord.com/api/oauth2/authorize',

    params: {
        client_id: '',
        redirect_uri: 'login/discord',
        response_type: 'code',
        scope: 'identify',
        state: {},
    }
}