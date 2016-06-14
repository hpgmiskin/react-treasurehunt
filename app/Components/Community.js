import React from 'react';
import $ from 'jquery';

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
    $.get('/api/communities/0',(response) => {
      this.setState({
        community: response
      });
    })
  }

  watchLocation(){
    this.location.watch((position) => {
      this.setState({
        position: position
      });
    });
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