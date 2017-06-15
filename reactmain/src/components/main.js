import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

// Import Components
import Header from "./header";
import Search from "./search";
import Data from "./data";

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	// GetYouTubeVideos() {
	// 	console.log("Hey there!");
	// 	axios.post("https://videodex-database.herokuapp.com/auth/youtube", {
	// 		auth: false
	// 	}).then(function(res) {
	// 		console.log(res);
	// 	});
	// }

	SearchYouTube(searchQuery) {
		let query = searchQuery;
		let key = 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M'; // TEMP
		
		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&maxResults=10&order=viewCount&key=" + key)
		.then((response) => {
            var nextPageToken = response.nextPageToken;
            var prevPageToken = response.prevPageToken;

			this.setState({
				ytData: response.data.items
			});
		}).catch(function(error) {
        	console.log(error);
      	});
	}

	render() {
		return (
			<Router>
				<div className="App-header">
					<Header/>
					<Search 
						youTubeSearch={this.SearchYouTube.bind(this)}
						youTubeResults={(this.state.ytData !== undefined) ? this.state.ytData : []}
					/>
					<Data/>
				</div>
			</Router>
		);
	}
}