const { Router } = require('express');
const request = require('request');

const router = Router();

const { config } = require("../../config");
const { encodeBasic } = require("../../utils/encodeBasic")

function getUserSearch(accessToken, word) {
    if(!accessToken || !word) {
        return Promise.resolve(null);
    }

    const options = {
        url: `https://api.spotify.com/v1/search?q=${word}&type=track`,
        headers: { Authorization: `Bearer ${accessToken}`},
        json: true
    };

    return new Promise((resolve, reject) => {
        request.get(options, function(error, response, body) {
            if(error || response.statusCode !== 200) {
                reject(error);
            }
            resolve(body);
        })
    });
}


router.get('/api/search', (req, res, next) => {
    const { q: word } = req.query;

    if(!word) {
        next(new Error('Missing Params'))
    }

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            Authorization: `Basic ${encodeBasic(config.spotifyClientId, config.spotifyClientSecret)}`
        },
        form: {
            grant_type: 'client_credentials',
        },
        json: true,
    }

    request.post(authOptions, async function(error, response, body) {
        if(error || response.statusCode !== 200) {
            next(error);
        }
        const accessToken = body.access_token;

        const userSearch = await getUserSearch(accessToken, word);
        res.json({data: userSearch});
    })
})

module.exports = router;