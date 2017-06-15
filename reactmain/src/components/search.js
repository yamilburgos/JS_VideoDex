import React, { Component } from 'react';

export default class Search extends Component {
	getAllVideoData() {
		this.props.youTubeSearch();
	}

	displayVideoData() {
		console.log("Displaying video data!");
		return (
			this.props.youTubeResults.map(function(videoEntry, id) {
				return	<div key={id}>{videoEntry.snippet.title}</div>
			})
		);
	}

  render() {
    return (
      <div>
					<form id="search-form" onSubmit={(e) => {this.getAllVideoData(); e.preventDefault();}}>
						<input type="search" className="searchField" id="query" placeholder="Search YouTube, Vimeo and Dailymotion!" />
					</form>

					<ul id="results"></ul>
					<div id="buttons"></div>
					
					<div>{console.log(this.props.youTubeResults)}</div>
					
					<div>{this.displayVideoData()}</div>

					<div>{console.log("end!")}</div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
			  	<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
					<div className="tempSquare"></div>
      </div>
    );
  }
}