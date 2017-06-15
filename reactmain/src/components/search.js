import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.props.youTubeSearch();
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
						<input type="search" className="searchField" id="query" placeholder="Search YouTube, Vimeo and Dailymotion!" />
					</form>

					<div id="buttons"></div>

					<div>{console.log(this.props.youTubeResults)}</div>
					
					<ul id="results">
						{this.displayVideoData()}
					</ul>

					<div>{console.log("end!")}</div>
      </div>
    );
  }
}