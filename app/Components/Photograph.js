import React from 'react';

import Webcam from 'react-webcam';

class Photograph extends React.Component {

  render() {
    return (
      <div>
        <Webcam width="100%"/>
      </div>
    )
  }

}

module.exports = Photograph
