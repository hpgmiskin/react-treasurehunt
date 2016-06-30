import React from 'react';
import $ from 'jquery';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
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

  displayDistance(location){
    let distance = this.findDistance(location.latitude, location.longitude);
    return `${distance}m away`
  }

  renderCommunity(){
    let position = this.state.position;
    let community = this.state.community;
    return (
      <div>
        <h1>HELLO {community.name}</h1>
          {
            community.locations.map((location,locationKey) => (
              <Card key={locationKey}>
                <CardHeader
                  title={location.name}
                  subtitle={this.displayDistance(location)}
                />
                {
                  location.clues.map((clue,clueKey) => (
                    <CardText key={clueKey} expandable={true}>
                      {clue}
                    </CardText>
                  ))
                }
              </Card>
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

Community.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

module.exports = Community;