import React, { Component } from 'react';

export default class Header extends Component {
  ShowCheckBoxes() {
    this.checkboxList = document.querySelectorAll(".checkList");

    this.checkboxList[0].style.display = (!this.expanded) ? "block" : "none";
    this.checkboxList[1].style.display = (!this.expanded) ? "block" : "none";
    this.checkboxList[2].style.display = (!this.expanded) ? "block" : "none";
    this.expanded = (!this.expanded) ? true : false;
  }

  render() {
    return (
      <div>
				<h1>VideoDex</h1>
				<h2>Today</h2>
				<input type="date"/>

        <form>
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.ShowCheckBoxes()}>
              <select><option>Site Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="checkList">
              <label><input type="checkbox" id="s1" defaultChecked/> YouTube</label>
              <label><input type="checkbox" id="s2" defaultChecked/> Twitch</label>
              <label><input type="checkbox" id="s3" defaultChecked/> Dailymotion</label>
            </div>
          </div>
       
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.ShowCheckBoxes()}>
              <select><option>Categories Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="checkList">
              <label><input type="checkbox" id="c1" defaultChecked/> All Categories</label>
              <label><input type="checkbox" id="c2"/> Category1</label>
              <label><input type="checkbox" id="c3"/> Category2</label>
              <label><input type="checkbox" id="c4"/> Category3</label>
            </div>
          </div>
       
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.ShowCheckBoxes()}>
              <select><option>Length Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="checkList">
              <label><input type="checkbox" id="l1" defaultChecked/> All Lengths</label>
              <label><input type="checkbox" id="l2"/> Short Videos Only</label>
              <label><input type="checkbox" id="l3"/> Long Videos Only</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}