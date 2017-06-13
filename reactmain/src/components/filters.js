import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <div className="bigBorder container"> 
        <select name="site">
		    <option value="YouTube">Site Filter</option>
	    </select>
		
        <select name="categories">
			<option value="YouTube">Categories Filter</option>
		</select>
		
        <select name="length">
			<option value="YouTube">Length Filter</option>
		</select>
		
        <select name="timeframe">
			<option value="YouTube">Timeframe Filter</option>
		</select>
      </div>
    );
  }
}