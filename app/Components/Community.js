import React from 'react';

import LocationService from '../Services/Location';

class Community extends React.Component {

  constructor(){
    super()
    this.location = new LocationService();
    this.state = {
      community: null
    }
  }

  componentDidMount(){
    fetch('/api/communities/0')
      .then((response) => response.json())
      .then((community) => {
        this.setState({
          community: community
        })
      })
      .done()
  }

  renderLoading(){
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  renderCommunity(){
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