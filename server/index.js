var express= require('express');
var compression = require('compression');
var path = require('path');
var cors = require('cors');

var app = express();

// Access secret files from local storage
var secret;
try {
  secret = require(path.join(__dirname, './../secret.json'));
} catch(error) {
  secret = {};
}

// If no environmental variable access google maps api key
var GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || secret.GOOGLE_MAPS_API_KEY;
var geocoder = require('./geocoder')(GOOGLE_MAPS_API_KEY);

var static_path = path.join(__dirname, './../build');

app.enable('trust proxy');

app.use(compression());

app.options('/api/*', cors());
app.use('/api/communities', cors(), require('./communities')(geocoder));

app.get('/api/currentTime', cors(), function(req, res) {
  res.send({ time: new Date() });
});

app.route('/').get(function(req, res) {
    res.header('Cache-Control', "max-age=60, must-revalidate, private");
    res.sendFile('index.html', {
        root: static_path
    });
});


function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.use('/', express.static(static_path, {
    maxage: 31557600
}));

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log(`Example app listening at http://localhost:${port}`);
});