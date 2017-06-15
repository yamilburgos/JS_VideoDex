import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
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

	searchResults = () => {
		console.log("???");
		return (
			<Search 
				searchTest={this.SearchYouTube.bind(this)}
			/>
		);
	}

	

	// GetYouTubeVideos() {
	// 	console.log("Hey there!");
	// 	axios.post("https://videodex-database.herokuapp.com/auth/youtube", {
	// 		auth: false
	// 	}).then(function(res) {
	// 		console.log(res);
	// 	});
	// }

	SearchYouTube() {
		console.log("///");
		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M")


		// axios.get("https://www.googleapis.com/youtube/v3/search", {
    //         part: 'snippet, id',
    //         q: "test",
    //         type: 'video',
    //         key: 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M' // TEMP
    //     })
		.then((response) => {
            var nextPageToken = response.nextPageToken;
            var prevPageToken = response.prevPageToken;

			this.setState({
				data: response
			});
            
            // Log data
            //console.log(response);
			 console.log(this.state.data);
		}).catch(function (error) {
        console.log(error);
      });
	}

	render() {
		return (
			<Router>
			<div className="App-header">
				{/*{this.GetYouTubeVideos()}*/}
				{/*<form id="search-form" type="button" onSubmit={() => this.SearchYouTube()}>
					<input type="search" className="searchField" id="query" placeholder="Search YouTube, Vimeo and Dailymotion!" />
				</form>*/}

				<Header/>
				<Route render={() => this.searchResults()}></Route>
				<Data/>
			</div>
			</Router>
		);
	}
}