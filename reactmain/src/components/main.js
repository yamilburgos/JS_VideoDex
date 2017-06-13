import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// Import Components
import LogStatus from "./logStatus";
import Filters from "./filters";
import TimeLine from "./timeline";
import VideoData from "./videoData";

export default class Main extends Component {

	loggingUserName() {
		console.log("Hey there!");
		axios.post("https://videodex-database.herokuapp.com/auth/login", {
			auth: true
		}).then(function(res) {
			console.log(res);
		});
	}

	render() {
		return (
			<div className="App-header">
				{this.loggingUserName()}
				<h1>VideoDex</h1>
				<h2>Today</h2>
				<input type="date"/>
				<LogStatus/>
				<Filters/>
				<TimeLine/>
				<VideoData/>
			</div>
		);
	}
}