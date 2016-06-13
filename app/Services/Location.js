class LocationService {

  position(callback){
    navigator.geolocation.getCurrentPosition((position) => {
      callback(position.coords);
    })
  }

  distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    distance = Math.acos(distance)
    distance = distance * 180/Math.PI
    distance = distance * 60 * 1.1515
    distance = distance * 1.609344
    distance = distance * 1000;
    return distance
  }

}

module.exports = LocationService