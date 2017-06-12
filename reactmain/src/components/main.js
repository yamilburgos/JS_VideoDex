import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

export default class Main extends Component {


	render() {
		return (
			<div className="App-header">
				<h1>VideoDex</h1>
				<h2>Today</h2>
				<p>June 12</p>
			</div>
		);
	}
}