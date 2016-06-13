import React from 'react';

import Time from './Time';
import Location from './Location';
import Community from './Community';

class Content extends React.Component {

  render() {
    return (
      <div>
        <Time/>
        <Location/>
        <Community/>
      </div>
  	)
  }

}

module.exports = Content
