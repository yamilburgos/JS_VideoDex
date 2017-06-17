import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.query = document.querySelector(".searchField");

		if(this.query !== null && this.query.value !== "") {
	  		console.log(this.query.value);
			this.props.youTubeSearch(this.query.value);
			this.props.twitchSearch(this.query.value);
			this.props.dailyMotionSearch(this.query.value);
		}
	}

	dateChange(dailyMotionDate) {
		if(dailyMotionDate !== null) {
			console.log(dailyMotionDate);
			var a = new Date(dailyMotionDate * 1000);
			console.log(a);
			return dailyMotionDate;
		}
	}

	displayYouTubeData() {
		console.log("Displaying YouTube data!");

		return this.props.youTubeResults.map(function(videoEntry, id) {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.snippet.thumbnails.default.url} alt="vid"/>
					</div>

					<div className="list-right">
						<h3><a href={"https://youtube.com/embed/" + videoEntry.id.videoId + "?rel=0"}>
							{videoEntry.snippet.title}
						</a></h3>
							
						<p>By <span className="captionTitle">{videoEntry.snippet.channelTitle} </span>
							{(videoEntry.snippet.publishedAt).split("T")[0]}
						</p>

						<p>{videoEntry.snippet.description}</p>
					</div>
				</li>
			);
		});
	}

	displayTwitchData() {
		console.log("Displaying Twitch Data!");;

		return this.props.twitchResults.map(function(videoEntry, id) {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.preview.medium} alt="vid"/>
					</div>

					<div className="list-right">
						<h3><a href={videoEntry.url}>
							{videoEntry.game}
						</a></h3>
							
						<p>By <span className="captionTitle">{videoEntry.channel.name} </span>
							{(videoEntry.created_at).split("T")[0]}
						</p>

						<p>{videoEntry.channel.status}</p>
					</div>
				</li>
			);
		});
	}

	displayDailyMotionData() {
		console.log("Displaying DailyMotion data!");

		return this.props.dailyMotionResults.map(function(videoEntry, id) {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.thumbnail_120_url} alt="vid"/>
					</div>

					<div className="list-right">
						<h3><a href={videoEntry.id }>
							{videoEntry.title}
						</a></h3>
							
						<p>By <span className="captionTitle">{videoEntry.title} </span>
							{videoEntry.created_time}
						</p>

						<p>{videoEntry.description}</p>
					</div>
				</li>
			);
		});
	}

  	render() {
    	return (
      		<div>
				<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
					<input type="search" className="searchField" placeholder="Search YouTube, Twitch and Dailymotion!"/>
				</form>

				<div>{console.log("YOUTUBE: ", this.props.youTubeResults)}</div>
				<div>{console.log("TWITCH: ", this.props.twitchResults)}</div>
				<div>{console.log("DAILYMOTION: ", this.props.dailyMotionResults)}</div>

				<ul id="results">
					{this.displayYouTubeData()}
					{this.displayTwitchData()}
					{this.displayDailyMotionData()}
				</ul>
						
				<div id="buttons"></div>
			</div>
   		);
  	}
}