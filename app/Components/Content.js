import React from 'react';

import Location from './Location';
import Community from './Community';

class Content extends React.Component {

  render() {
    return (
      <div>
        <Location/>
        <Community/>
      </div>
  	)
  }

}

module.exports = Content
