var NodeGeocoder = require('node-geocoder');
 

module.exports = function(GOOGLE_MAPS_API_KEY){

  var options = {
    provider: 'google',
   
    // Optionnal depending of the providers 
    httpAdapter: 'https', // Default 
    apiKey: GOOGLE_MAPS_API_KEY, // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
  };
   
  var geocoder = NodeGeocoder(options);
  return geocoder;

}


