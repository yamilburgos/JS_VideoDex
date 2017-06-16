import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.query = document.querySelector(".searchField");

		if(this.query !== null && this.query.value !== "") {
	  	console.log(this.query.value);
			this.props.youTubeSearch(this.query.value);
			this.props.vimeoSearch(this.query.value);
			this.props.dailyMotionSearch(this.query.value);
		}
	}

	displayVideoData() {
		console.log("Displaying video data!");

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
							{videoEntry.snippet.publishedAt}
						</p>

						<p>{videoEntry.snippet.description}</p>
					</div>
				</li>
			);
		});
	}

  render() {
    return (
      <div>
					<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
						<input type="search" className="searchField" placeholder="Search YouTube, Vimeo and Dailymotion!"/>
					</form>

					<div>{console.log("YOUTUBE: ", this.props.youTubeResults)}</div>
					<div>{console.log("VIMEO: ", this.props.vimeoResults)}</div>
					<div>{console.log("DAILYMOTION: ", this.props.dailyMotionResults)}</div>

					<ul id="results">
						{this.displayVideoData()}
					</ul>
					
					<div id="buttons"></div>
      </div>
    );
  }
}