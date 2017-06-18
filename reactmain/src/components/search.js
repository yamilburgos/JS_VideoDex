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
		console.log("Displaying Twitch Data!");
		return this.props.videoResults[1].map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.preview.medium} alt="vid" onClick=
							{() => this.popupData([
								"Twitch",
								videoEntry.game,
								videoEntry.channel.name,
								videoEntry.channel.status
							], true)}/>
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
		return this.props.videoResults[2].map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix">
					<div className="list-left">
						<img src={videoEntry.thumbnail_120_url} alt="vid" onClick=
							{() => this.popupData([
								"DailyMotion",
								videoEntry.title,
								videoEntry["owner.screenname"],
								videoEntry.description
							], true)}/>
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

	popupData(videoData, displayPopup) {
		this.videoTitle = document.querySelector("#videoTitle");
		this.videoUsername = document.querySelector("#videoUsername");
		this.videoDescription = document.querySelector("#videoDescription");

		this.videoTitle.innerHTML = (displayPopup) ? videoData[1] : undefined;
		this.videoUsername.innerHTML = (displayPopup) ? videoData[2] : undefined;
		this.videoDescription.innerHTML = (displayPopup) ? videoData[3] : undefined;

        this.popStyle = document.querySelector("#popup");
        this.popStyle.style.opacity = (displayPopup) ? 1 : 0;
        this.popStyle.style.visibility = (displayPopup) ? "visible" : "hidden";
	}

  	render() {
    	return (
      		<div>
				<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
					<input type="search" className="searchField" placeholder="Search YouTube, Twitch and Dailymotion!"/>
				</form>

				<div id="popup" className="overlay light">
                    <div className="popup">
                        <h2 id="videoTitle"></h2> 

                        <a className="close" onClick={() => this.popupData(null, false)}>&times;</a>

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