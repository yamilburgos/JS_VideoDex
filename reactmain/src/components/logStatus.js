import React, { Component } from 'react';

export default class LogStatus extends Component {
  render() {
    return (
      <div className="bigBorder container"> 
        <div className="navButtons">
        </div>
          <div id="aboutMemedrDiv">
            <p>YouTube</p> <p>Active | Sign Out</p>
			<p>Vimeo</p> <p>Active | Sign Out</p>
			<p>Dailymotion</p> <p>Inactive | Log In</p>
          </div>
      </div>
    );
  }
}