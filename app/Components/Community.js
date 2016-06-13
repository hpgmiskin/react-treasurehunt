import React from 'react';
import axios  from 'axios';

import LocationService from '../Services/Location';

class Community extends React.Component {

  constructor(){
    super()
    this.location = new LocationService();
    this.state = {
      community: null,
      position: null
    }
  }

  fetchData(){
    axios.get('/api/communities/0')
      .then((response) => {
        this.setState({
          community: response.data
        });
      })
  }

  watchLocation(){
    console.log('watchLocation')
    let updatePosition = (position) => {
      this.setState({
        position: position
      })
    };
    this.location.position((position) => {
      console.log('updating state')
      updatePosition(position);
      this.location.watch(updatePosition);
    })
  }

  componentDidMount(){
    this.fetchData();
    this.watchLocation();
  }

  renderLoading(){
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  findDistance(latitude, longitude){
    let position = this.state.position;
    let distance = Infinity;
    if (this.state.position){
      distance = this.location.distance(
        position.latitude,
        position.longitude,
        latitude,
        longitude
      )
    }
    return Math.round(distance);
  }

  renderCommunity(){
    let position = this.state.position;
    let community = this.state.community;
    return (
      <div>
        <h1>{community.name}</h1>
          {
            community.locations.map((location) => (
              <div>
                <h2>
                  {location.name}
                  <small> - {location.latitude} {location.longitude}</small>
                </h2>
                {
                  position ?
                  <h4>You are { this.findDistance(location.latitude, location.longitude) }m away</h4> :
                  <h4>No Position</h4>
                }
                <ul>
                  {
                    location.clues.map((clue) => (
                      <li>{clue}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        <h3>
          Distance is 
          {
            this.location.distance(
              community.locations[0].latitude,
              community.locations[0].longitude,
              community.locations[1].latitude,
              community.locations[1].longitude
            )
          }
        </h3>
      </div>
    )
  }

  render(){
    return (
      this.state.community ? 
      this.renderCommunity() :
      this.renderLoading()
    ) 
  }

}

module.exports = Community;