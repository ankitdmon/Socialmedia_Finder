const axios = require("axios");

const instance = axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1", // Set the Google Search API base URL here
});

module.exports = instance;
