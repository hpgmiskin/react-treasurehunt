var React = require('react');

var Header = require('./Components/Header');
var Content = require('./Components/Content');

// var Favicon = require('react-favicon');
// var faviconUrl = require('./Assets/favicon.ico');
// <Favicon url={ faviconUrl }/>

module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }

});