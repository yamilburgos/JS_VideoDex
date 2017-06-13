import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import axios from 'axios';

export default class Main extends Component {

	loggingUserName() {
		console.log("Hey there!");
		axios.post("https://videodex-database.herokuapp.com/login", {
			auth: true
		});
	}

	render() {
		return (
			<div className="App-header">
				{this.loggingUserName()}
				<h1>VideoDex</h1>
				<h2>Today</h2>
				<input type="date"/>

				<p>YouTube</p> <p>Active | Sign Out</p>
				<p>Vimeo</p> <p>Active | Sign Out</p>
				<p>Dailymotion</p> <p>Inactive | Log In</p>

				<select name="site">
					<option value="YouTube">Site Filter<input type="checkbox"/></option>
				</select>
				<select name="categories">
					<option value="YouTube">Categories Filter<input type="checkbox"/></option>
				</select>
				<select name="length">
					<option value="YouTube">Length Filter<input type="checkbox"/></option>
				</select>
				<select name="timeframe">
					<option value="YouTube">Timeframe Filter<input type="checkbox"/></option>
				</select>

				<p>12 to 1 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>1 to 2 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>2 to 3 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>3 to 4 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>4 to 5 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>5 to 6 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>6 to 7 pm</p>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
				<p>7 to 8 pm</p>
					<div className="tempSquare"></div>

				<div className="tempBigSquare">
					<img alt="thumbnail"/>
					<p>Watched</p>
					<p>Views: 000,000</p>
					<p>Likes: 00</p>
					<p>Dislikes: 00</p>
					<p>Video Length: 0:00</p>
					<a href="#">Favorite this</a>
					<br/>
					<a href="#">Watch Later</a>
				</div>
			</div>
		);
	}
}