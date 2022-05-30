const axios = require('axios');
require("dotenv").config();

const lol = axios.default.create({baseURL: process.env.LOL_URL, headers: { "X-Riot-Token": process.env.LOL_KEY, "User-Agent": "insomnia/2022.3.0" }});

module.exports = lol;