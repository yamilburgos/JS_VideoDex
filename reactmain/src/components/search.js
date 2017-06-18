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
		
		return this.props.youTubeResults.map((videoEntry, id) => {
			return (
				<li key={id} className="clearFix" onClick=
								{() => this.popupData([
									"YouTube",
									videoEntry.snippet.title,
									videoEntry.snippet.channelTitle,
									videoEntry.snippet.description,
									videoEntry.id.videoId
								])}>
					<div className="list-left">
						<a href="#popup">
							<img src={videoEntry.snippet.thumbnails.default.url} alt="vid"/>
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
							{() => this.popupData([
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
							{() => this.popupData([
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

	popupData(videoData) {
		this.videoTitle = document.querySelector("#videoTitle");
		this.videoUsername = document.querySelector("#videoUsername");
		this.videoDescription = document.querySelector("#videoDescription");

		this.videoTitle.innerHTML = videoData[1];
		this.videoUsername.innerHTML = videoData[2];
		this.videoDescription.innerHTML = videoData[3];

        this.popStyle = document.querySelector("#popup");

        if(this.popStyle !== null) {
            this.popStyle.style.opacity = 1;
            this.popStyle.style.visibility = "visible";
       }
	}

	popupController() {
        this.popStyle = document.querySelector("#popup");

        if(this.popStyle !== null) {
            this.popStyle.style.opacity = 0;
            this.popStyle.style.visibility = "hidden";
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
                        <h2>What the what?</h2>
                        {/*Video Title*/}
                        <h2 id="videoTitle">{(this.props.videoData !== undefined) ? this.props.videoData[0] : undefined}</h2> 

                        <a className="close" onClick={() => this.popupController()}>&times;</a>
                        <div className="content">
                            <p>Click outside the popup to close.</p>

                            {/*Video Username*/}
                            <p id="videoUsername">By <span className="captionTitle">{(this.props.videoData !== undefined) ? this.props.videoData[2] : undefined}</span></p>
                            
                            {/*Video Description*/}
                            <p id="videoDescription">{(this.props.videoData !== undefined) ? this.props.videoData[1] : undefined}</p>
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