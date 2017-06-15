import React, { Component } from 'react';

export default class VideoSearch extends Component {
	// SearchYouTube() {
	// 	axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M")


	// 	// axios.get("https://www.googleapis.com/youtube/v3/search", {
  //   //         part: 'snippet, id',
  //   //         q: "test",
  //   //         type: 'video',
  //   //         key: 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M' // TEMP
  //   //     })
	// 			.then(function(data) {
  //           var nextPageToken = data.nextPageToken;
  //           var prevPageToken = data.prevPageToken;
            
  //           // Log data
  //           console.log(data);
	// 	});
	// }

  render() {
    return (
      <div>
					<form id="search-form" onSubmit={(e) => {this.props.searchTest(); e.preventDefault();}}>
						<input type="search" className="searchField" id="query" placeholder="Search YouTube, Vimeo and Dailymotion!" />
					</form>

					<ul id="results"></ul>
					<div id="buttons"></div>

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