import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// Import Components
import Header from "./header";
import Search from "./search";
import Data from "./data";

export default class Main extends Component {
	loggingUserName() {
		console.log("Hey there!");
		axios.post("https://videodex-database.herokuapp.com/auth/youtube", {
			auth: false
		}).then(function(res) {
			console.log(res);
		});
	}

	render() {
		return (
			<div className="App-header">
				{this.loggingUserName()}
				<Header/>
				<Search/>
				<Data/>
			</div>
		);
	}
}