import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.query = document.querySelector(".searchField");

		if(this.query !== null && this.query.value !== "") {
			this.props.videoSearch(this.query.value);
			this.query.value = "";
		}
	}

	displayYouTubeData() {
		console.log("Displaying YouTube data!");
		return this.props.videoResults[0].map((videoEntry, id) => {
			return (
				<li key={id} className="listEntry" onClick=
					{() => this.popupData([
						"YouTube",
						videoEntry.snippet.title,
						videoEntry.snippet.channelTitle,
						videoEntry.snippet.description,
						videoEntry.id.videoId
					], true)}>

					<img src={videoEntry.snippet.thumbnails.default.url} alt="vid"/>
					<p className="videoTitle">{videoEntry.snippet.title}</p>
					<p>By <span className="captionTitle">{videoEntry.snippet.channelTitle}</span></p>
				</li>
			);
		});
	}

	displayTwitchData() {
		console.log("Displaying Twitch Data!");
		return this.props.videoResults[1].map((videoEntry, id) => {
			return (
				<li key={id} className="listEntry" onClick=
					{() => this.popupData([
						"Twitch",
						videoEntry.game,
						videoEntry.channel.name,
						videoEntry.channel.status,
						videoEntry.channel.name
					], true)}>

					<img src={videoEntry.preview.medium} alt="vid"/>
					<p className="videoTitle">{videoEntry.game}</p>
					<p>By <span className="captionTitle">{videoEntry.channel.name}</span></p>
				</li>
			);
		});
	}

	displayDailyMotionData() {
		console.log("Displaying DailyMotion data!");
		return this.props.videoResults[2].map((videoEntry, id) => {
			return (
				<li key={id} className="listEntry" onClick=
					{() => this.popupData([
						"DailyMotion",
						videoEntry.title,
						videoEntry["owner.screenname"],
						videoEntry.description,
						videoEntry.id
					], true)}>

					<img src={videoEntry.thumbnail_120_url} alt="vid"/>
					<p className="videoTitle">{videoEntry.title}</p>
					<p>By <span className="captionTitle">{videoEntry["owner.screenname"]}</span></p>
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
		this.videoUsername.innerHTML = (displayPopup) ? videoData[2] : undefined;
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
				return 'http://www.twitch.tv/' + videoID + "/embed";
			default:
				return "//www.dailymotion.com/embed/video/" + videoID;
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
                        <h2 id="videoTitle">Temp Title</h2> 
                        <a className="close" onClick={() => this.popupData(null, false)}>&times;</a>
						<iframe id="myIframe" width="420" height="345"></iframe>

                        <div className="content">
                            <p>By <span id="videoUsername" className="captionTitle"></span></p>
                            <p id="videoDescription" className="descriptionNotes"></p>
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