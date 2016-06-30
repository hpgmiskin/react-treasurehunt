import React from 'react';

class Photograph extends React.Component {

  render() {
    return (
      <div>
        <input type="file" accept="image/*"></input>
      </div>
    )
  }

}

module.exports = Photograph
