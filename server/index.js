var express= require('express');
var compression = require('compression');
var cors = require('cors');
var config = require('./config');

var app = express();

app.enable('trust proxy');
app.use(compression());
app.options('/api/*', cors());

var geocoder = require('./geocoder')(config.GOOGLE_MAPS_API_KEY);
app.use('/api/communities', cors(), require('./communities')(geocoder));

app.route('/').get(function(req, res) {
    res.header('Cache-Control', "max-age=60, must-revalidate, private");
    res.sendFile('index.html', {
        root: config.STATIC_PATH
    });
});

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.use('/', express.static(config.STATIC_PATH, {
    maxage: 31557600
}));

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log(`Example app listening at http://localhost:${port}`);
});
