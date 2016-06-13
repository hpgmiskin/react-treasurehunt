import React from 'react';

import LocationService from '../Services/Location';

class Location extends React.Component {

  constructor(){
    super()
    this.location = new LocationService();
    this.state = {
      position: null
    }
  }

  componentDidMount(){
    if (navigator.geolocation){
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.setState({ position: position.coords });
      // })
      this.location.position((position) => {
        this.setState({ position: position });
      })
    }
  }

  render(){
    return (
      <div>
        <h1>Location</h1>
        {
          this.state.position ?
          <p>{this.state.position.latitude} {this.state.position.longitude}</p> :
          <p>No Position Found</p>
        }
      </div>
    ) 
  }

}

Location.state 

module.exports = Location;