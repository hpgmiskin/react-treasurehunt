var path = require('path');

// Attempt to load secret variables
var secret;
try {
  secret = require(path.join(__dirname, './../secret.json'));
} catch(error) {
  secret = {};
}

// Define configuration
var config = {
  production: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    STATIC_PATH: path.join(__dirname, './../client')
  },
  development: {
    GOOGLE_MAPS_API_KEY: secret.GOOGLE_MAPS_API_KEY,
    STATIC_PATH: path.join(__dirname, './../build')
  }
}

var NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = config[NODE_ENV]