import React from 'react';

import Location from './Location';
import Community from './Community';
import Photograph from './Photograph';

class Content extends React.Component {

  render() {
    return (
      <div>
        <Community/>
        <Photograph/>
      </div>
  	)
  }

}

module.exports = Content
