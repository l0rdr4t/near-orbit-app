// functions/handleAuthCode.js

const { default: axios } = require("axios");

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // var axios = new axios();
    const oauthSecret = process.env.DISCORD_SECRET;
    const body = JSON.parse(event.body);
    const code = body.code;
    const state = body.state;

    // Handle the OAuth secret and authorization code here.
    // For example, exchange the authorization code for an access token.
    // ...
    const data = new URLSearchParams(Object.entries({
        grant_type: 'authorization_code',
        client_id: '1096086421221150812',
        client_secret: oauthSecret,
        redirect_uri: 'https://nearorbit.app/login/discord',
        code: code,
        state: state
    }));

    const res = await axios.post('https://discord.com/api/oauth2/token', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const resStr = JSON.stringify(res);

    if (res.status == '200') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'OAuth secret and authorization code handled',
                res: resStr
            }),
        };
    } else {
        return {
            statusCode: res.status,
            body: JSON.stringify({
                message: res.statusText,
                res: resStr
            }),
        };
    }
};
