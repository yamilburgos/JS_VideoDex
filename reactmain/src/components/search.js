import React, { Component } from 'react';
import PopUp from "./popUp";

export default class Search extends Component {
	getAllVideoData() {
		this.query = document.querySelector(".searchField");

		if(this.query !== null && this.query.value !== "") {
			this.props.videoSearch(this.query.value);
		}
	}

	displayYouTubeData() {
		console.log("Displaying YouTube data!", this.props.youTubeResults);
		
		return this.props.youTubeResults.map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<a href="#popup">
							<img src={videoEntry.snippet.thumbnails.default.url} alt="vid" onClick=
								{() => this.workPlease([
									"YouTube",
									videoEntry.snippet.title,
									videoEntry.snippet.channelTitle,
									videoEntry.snippet.description,
									videoEntry.id.videoId
								])}/>
						</a>
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

		return this.props.twitchResults.map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.preview.medium} alt="vid" onClick=
							{() => this.workPlease([
								"Twitch",
								videoEntry.game,
								videoEntry.channel.name,
								videoEntry.channel.status
							])}/>
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
		console.log("Displaying DailyMotion data!", this.props.dailyMotionResults);

		return this.props.dailyMotionResults.map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.thumbnail_120_url} alt="vid" onClick=
							{() => this.workPlease([
								"DailyMotion",
								videoEntry.title,
								videoEntry["owner.screenname"],
								videoEntry.description
							])}/>
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

	workPlease(videoData) {
		console.log("POPUPPPP!", videoData);
		
		return <PopUp videoData={videoData}/>;
	}

  	render() {
    	return (
      		<div>
				<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
					<input type="search" className="searchField" placeholder="Search YouTube, Twitch and Dailymotion!"/>
				</form>

				{this.workPlease()}

				<div>{console.log("Searching!")}</div>

				<ul id="results">
					{(this.props.ready === true) ? this.displayYouTubeData() : undefined}
					{(this.props.ready === true) ? this.displayTwitchData(): undefined}
					{(this.props.ready === true) ? this.displayDailyMotionData() : undefined}
				</ul>
						
				<div id="buttons"></div>
			</div>
   		);
  	}
}