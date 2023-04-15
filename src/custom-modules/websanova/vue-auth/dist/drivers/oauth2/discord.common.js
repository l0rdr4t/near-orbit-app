/*!
 * @websanova/vue-auth v4.2.1
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

'use strict';

var discord = {
  url: 'https://discord.com/api/oauth2/authorize',
  params: {
    client_id: '',
    redirect_uri: 'login/discord',
    response_type: 'code',
    scope: 'identify',
    state: {}
  }
};

module.exports = discord;
