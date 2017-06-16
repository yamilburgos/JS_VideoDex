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
			ytData: [],
			vData: [],
			dmData: []
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

	SearchYouTube(query) {
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

	SearchVimeo(query) {
		console.log("Query Vimeo videos with: ", query);

		axios.get("https://api.vimeo.com/videos?per_page=10&query=toy", {
			name: "Authorization",
			in: "header",
			value: "Bearer e56ec69ae2e52dcc7bb9d09c238ff805"})
		.then((response) => {
			this.setState({
				vData: response.data.items
			});
		}).catch(function(error) {
        	console.log(error);
      	});
	}

	SearchDailyMotion(query) {
		axios.get("https://api.dailymotion.com/videos/?search=" + query + "&page=1&limit=10")
		.then((response) => {
			this.setState({
				dmData: response.data.list
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
						vimeoSearch={this.SearchVimeo.bind(this)}
						dailyMotionSearch={this.SearchDailyMotion.bind(this)}
						youTubeResults={(this.state.ytData !== undefined) ? this.state.ytData : []}
						vimeoResults={(this.state.vData !== undefined) ? this.state.vData : []}
						dailyMotionResults={(this.state.dmData !== undefined) ? this.state.dmData : []}
					/>
					<Data/>
				</div>
			</Router>
		);
	}
}