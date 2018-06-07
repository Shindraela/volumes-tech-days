const request = require('request');
const auth = require('../config/auth.config.js');

request.get('https://spaces.nexudus.com/api/business', {
    'auth': {
        'username': auth.username,
        'password': auth.password
    }
});