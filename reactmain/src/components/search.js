import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.query = document.querySelector(".searchField");

		if(this.query !== null && this.query.value !== "") {
			this.props.videoSearch(this.query.value);
		}
	}

	displayYouTubeData() {
		console.log("Displaying YouTube data!");
		return this.props.videoResults[0].map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix" onClick=
					{() => this.popupData([
						"YouTube",
						videoEntry.snippet.title,
						videoEntry.snippet.channelTitle,
						videoEntry.snippet.description,
						videoEntry.id.videoId
					], true)}>

					<div className="list-left">
						<img src={videoEntry.snippet.thumbnails.default.url} alt="vid"/>
						<p>{videoEntry.snippet.title}</p>
						<p>{videoEntry.snippet.channelTitle}</p>
					</div>
				</li>
			);
		});
	}

	displayTwitchData() {
		console.log("Displaying Twitch Data!");
		return this.props.videoResults[1].map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix" onClick=
					{() => this.popupData([
						"Twitch",
						videoEntry.game,
						videoEntry.channel.name,
						videoEntry.channel.status,
						videoEntry.url
					], true)}>

					<div className="list-left">
						<img src={videoEntry.preview.medium} alt="vid"/>
						<p>{videoEntry.game}</p>
						<p>By {videoEntry.channel.name}</p>
					</div>
				</li>
			);
		});
	}

	displayDailyMotionData() {
		console.log("Displaying DailyMotion data!", this.props.dailyMotionResults);
		return this.props.videoResults[2].map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix" onClick=
					{() => this.popupData([
						"DailyMotion",
						videoEntry.title,
						videoEntry["owner.screenname"],
						videoEntry.description,
						videoEntry.id
					], true)}>

					<div className="list-left">
						<img src={videoEntry.thumbnail_120_url} alt="vid"/>
						<p>{videoEntry.title}</p>
						<p>By {videoEntry["owner.screenname"]}</p>
					</div>
				</li>
			);
		});
	}

	popupData(videoData, displayPopup) {
		this.videoTitle = document.querySelector("#videoTitle");
		this.videoUsername = document.querySelector("#videoUsername");
		this.videoDescription = document.querySelector("#videoDescription");
		this.videoPlayer = document.getElementById('myIframe');

		this.videoTitle.innerHTML = (displayPopup) ? videoData[1] : undefined;
		this.videoUsername.innerHTML = (displayPopup) ? "By " + videoData[2] : undefined;
		this.videoDescription.innerHTML = (displayPopup) ? videoData[3] : undefined;
		this.videoPlayer.src = (displayPopup) ? 
			this.switchVideoPlayer(videoData[0], videoData[4]) : undefined;
		
        this.popStyle = document.querySelector("#popup");
        this.popStyle.style.opacity = (displayPopup) ? 1 : 0;
        this.popStyle.style.visibility = (displayPopup) ? "visible" : "hidden";
	}

	switchVideoPlayer(videoSource, videoID) {
		switch(videoSource){
			case "YouTube":
			return 'https://youtube.com/embed/' + videoID;
			case "Twitch":
			return "";
			default:
			return "";
		}
	}

  	render() {
    	return (
      		<div>
				<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
					<input type="search" className="searchField" placeholder="Search YouTube, Twitch and Dailymotion!"/>
				</form>

				<div id="popup" className="overlay light">
                    <div className="popup">
                        <h3 id="videoTitle">Temp Title</h3> 
                        <a className="close" onClick={() => this.popupData(null, false)}>&times;</a>
						<iframe id="myIframe" width="420" height="345"></iframe>

                        <div className="content">
                            <p id="videoUsername">By <span className="captionTitle"></span></p>
                            <p id="videoDescription"></p>
                        </div>
                    </div>
                </div>

				<ul id="results">
					{(this.props.ready === true) ? this.displayYouTubeData() : undefined}
					{(this.props.ready === true) ? this.displayTwitchData(): undefined}
					{(this.props.ready === true) ? this.displayDailyMotionData() : undefined}
				</ul>
			</div>
   		);
  	}
}