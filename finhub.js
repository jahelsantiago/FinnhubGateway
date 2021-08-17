const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c0k32bv48v6qqehfr5rg" // Replace this latter with .env
const finnhubClient = new finnhub.DefaultApi()

module.exports = {finnhubClient}