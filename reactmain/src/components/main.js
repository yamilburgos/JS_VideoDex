import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from "./header";
import Search from "./search";

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			youtubeData: [],
			twitchData: [],
			dailymotionData: [],
			ready: false
		};
	}

	SearchYouTube(query) {
		let key = "AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M"; // TEMP Not actual key used

		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&maxResults=10&order=viewCount&key=" + key)
		.then((response) => {
			this.SearchTwitch(query, response.data.items);
		}).catch((error) => {
        	console.log(error);
			this.SearchTwitch(query);
      	});
	}

	SearchTwitch(query, ytData) {
		let key = "6m6qtmmpe0op92ru1meprq5qwjboj2";

		axios.get("https://api.twitch.tv/kraken/search/streams?query=" + query + "&client_id=" + key )
		.then((response) => {
			this.SearchDailyMotion(query, ytData, response.data.streams);
		}).catch((error) => {
        	console.log(error);
			this.SearchDailyMotion(query);
      	});
	}

	SearchDailyMotion(query, ytData, tData) {
		axios.get("https://api.dailymotion.com/videos?search=" + query + "&fields=created_time,description,channel,id,owner,owner.screenname,thumbnail_120_url,title&page=1&limit=10")
		.then((response) => {
			this.setState({
				youtubeData: ytData,
				twitchData: tData,
				dailymotionData: response.data.list,
				ready: true
			});
		}).catch((error) => {
        	console.log(error);
      	});
	}

	render() {
		return (
			<Router>
				<div className="appSetter">
					<Header/>
					<Search 
						videoSearch={this.SearchYouTube.bind(this)}
						videoResults={[
							(this.state.youtubeData !== undefined) ? this.state.youtubeData : [],
							(this.state.twitchData !== undefined) ? this.state.twitchData : [],
							(this.state.dailymotionData !== undefined) ? this.state.dailymotionData : []
						]}
						ready={this.state.ready}
					/>
				</div>
			</Router>
		);
	}
}