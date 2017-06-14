import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <div className="bigBorder container">
				<h1>VideoDex</h1>
				<h2>Today</h2>
				<input type="date"/>

        <select name="site">
		      <option value="AllSites">All Sites</option>
          <option value="YouTube">YouTube</option>
          <option value="Vimeo">Vimeo</option>
          <option value="Dailymotion">Dailymotion</option>
          
	      </select>
        <select name="categories">
    			<option value="YouTube">Categories Filter</option>
		    </select>
        <select name="length">
			    <option value="YouTube">Length Filter</option>
		    </select>
      </div>
    );
  }
}