import React from 'react';

class Location extends React.Component {

  constructor(){
    super()
    this.state = {
      position: null
    }
  }

  componentDidMount(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ position: position.coords });
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