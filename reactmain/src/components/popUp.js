import React, { Component } from 'react';

export default class PopUp extends Component {
    revealPopup() {
        this.popStyle = document.querySelector("#popup");

        if(this.popStyle !== null) {
            console.log(this.popStyle);
            this.popStyle.style.opacity = 1;
            this.popStyle.style.visibility = "visible";
       }
    }

    hidePopup() {
        this.popStyle = document.querySelector("#popup");

        if(this.popStyle !== null) {
            console.log(this.popStyle);
            this.popStyle.style.opacity = 0;
            this.popStyle.style.visibility = "hidden";
       }
    }

  	render() {
    	return (
      		<div>
				<div id="wrapper">
	                <p><a className="button" href="#popup">Click Me Too</a></p>
                </div>

                {console.log("Is this being rendered?")}

                <div id="popup" className="overlay light">
                    <a className="cancel" href="#"> </a>
                    <div className="popup">
                        <h2>What the what?</h2>
                        {/*Video Title*/}
                        <h2>{(this.props.videoData !== undefined) ? this.props.videoData[0] : undefined}</h2> 

                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            <p>Click outside the popup to close.</p>

                            {/*Video Username*/}
                            <p>By <span className="captionTitle">{(this.props.videoData !== undefined) ? this.props.videoData[2] : undefined}</span></p>
                            
                            {/*Video Description*/}
                            <p>{(this.props.videoData !== undefined) ? this.props.videoData[1] : undefined}</p>

                        </div>
                    </div>
                </div>
                {this.hidePopup()}
			</div>
   		);
  	}
}