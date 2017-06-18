import React, { Component } from 'react';

export default class PopUp extends Component {
    popupController(revealCheck) {
        this.popStyle = document.querySelector("#popup");

        if(this.popStyle !== null) {
            this.popStyle.style.opacity = (revealCheck) ? 1 : 0;
            this.popStyle.style.visibility = (revealCheck) ? "visible" : "hidden";
       }
    }

  	render() {
    	return (
      		<div>
				<div id="wrapper">
	                <p className="button" onClick={() => this.popupController(true)}>Click Me Too</p>
                </div>

                {console.log("Is this being rendered?")}

                <div id="popup" className="overlay light">
                    <div className="popup">
                        <h2>What the what?</h2>
                        {/*Video Title*/}
                        <h2>{(this.props.videoData !== undefined) ? this.props.videoData[0] : undefined}</h2> 

                        <a className="close" onClick={() => this.popupController(false)}>&times;</a>
                        <div className="content">
                            <p>Click outside the popup to close.</p>

                            {/*Video Username*/}
                            <p>By <span className="captionTitle">{(this.props.videoData !== undefined) ? this.props.videoData[2] : undefined}</span></p>
                            
                            {/*Video Description*/}
                            <p>{(this.props.videoData !== undefined) ? this.props.videoData[1] : undefined}</p>

                        </div>
                    </div>
                </div>
			</div>
   		);
  	}
}