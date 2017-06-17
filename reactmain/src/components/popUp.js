import React, { Component } from 'react';

export default class PopUp extends Component {
  	render() {
    	return (
      		<div>
				<div id="wrapper">
	                <p><a className="button" href="#popup">Click Me Too</a></p>
                </div>

                {console.log("Is this being rendered?")}

                <div id="popup" className="overlay light">
                    <a className="cancel" href="#"></a>
                    <div className="popup">
                        <h2>What the what?</h2>
                        <h3>{this.props.newArray}</h3>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            <p>Click outside the popup to close.</p>
                        </div>
                    </div>
                </div>
			</div>
   		);
  	}
}