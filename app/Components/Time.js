import React from 'react';
import axios  from 'axios';

class Time extends React.Component {

  constructor(){
    super()
    this.state = {
      time: null
    }
  }

  fetchData(){
    axios.get('api/currentTime')
      .then((response) => {
        this.setState({
          time: response.data
        });
      })
  }

  componentDidMount(){
    this.fetchData();
  }

  renderLoading(){
    return (
      <div>
        <h2>Loading</h2>
      </div>
    )
  }

  renderTime(){
    let time = this.state.time;
    return (
      <div>
        <h2>{time}</h2>
      </div>
    )
  }

  render(){
    return (
      this.state.time ? 
      this.renderTime() :
      this.renderLoading()
    ) 
  }

}

module.exports = Time;