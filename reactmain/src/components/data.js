import React, { Component } from 'react';

export default class Data extends Component {
  render() {
    return (
      <div> 
        <div className="tempBigSquare">
			<img alt="thumbnail"/>
			<p>Watched</p>
			<p>Views: 000,000</p>
			<p>Likes: 00</p>
			<p>Dislikes: 00</p>
			<p>Video Length: 0:00</p>
		</div>
      </div>
    );
  }
}