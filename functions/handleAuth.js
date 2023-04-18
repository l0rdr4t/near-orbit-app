// functions/handleAuthCode.js

const { default: axios } = require("axios");
const oauthSecret = process.env.DISCORD_SECRET;
const oauthRedirect = process.env.DISCORD_REDIRECT;

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const body = JSON.parse(event.body);
    const code = body.code;
    const state = body.state;

    const data = {
        grant_type: 'authorization_code',
        client_id: '1096086421221150812',
        client_secret: oauthSecret,
        redirect_uri: oauthRedirect,
        code: code,
        state: state
    };

    let response = {};

    try {
        const res = await axios.post('https://discord.com/api/oauth2/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        response = res;
    } catch (err) {
        response = err.response;
        response.status = response.status || 500;
    }

    return {
        statusCode: response.status,
        body: JSON.stringify(response.data)
    };
};