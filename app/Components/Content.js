import React from 'react';

import Location from './Location';
import Community from './Community';
import Photograph from './Photograph';

class Content extends React.Component {

  render() {
    return (
      <div>
        <Community/>
        <div style={{ padding: 20 }}></div>
        <Photograph/>
      </div>
  	)
  }

}

module.exports = Content
