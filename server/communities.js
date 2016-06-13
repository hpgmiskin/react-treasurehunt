var express = require('express');
var router = express.Router();

var communities = require('./communities.json');

module.exports = function(geocoder){

  communities.map(function(community){
    community.locations.map(function(location){

      if (location.address && !(location.latitude || location.longitude)){      
        var geolocation = geocoder.geocode(location.address);
        geolocation.then(function(response){
          if (response && response.length){
            location.latitude = response[0].latitude;
            location.longitude = response[0].longitude;
          }
        });
      };

    })
  })

  router.get('/',function(req,res){
    res.json(communities);
  })

  router.get('/:id',function(req,res){
    var id = req.params.id;
    res.json(communities[id]);
  })

  return router;

}