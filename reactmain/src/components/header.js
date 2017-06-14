import React, { Component } from 'react';

export default class Filters extends Component {
  showCheckBoxes(checkList) {
    this.checkboxes = document.querySelector(checkList);
    this.checkboxes.style.display = (!this.expanded) ? "block" : "none";
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
            <div className="selectBox" onClick={() => this.showCheckBoxes(".siteCheckList")}>
              <select><option>Site Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="siteCheckList">
              <label><input type="checkbox" id="site1" defaultChecked/> YouTube</label>
              <label><input type="checkbox" id="site2" defaultChecked/> Vimeo</label>
              <label><input type="checkbox" id="site3" defaultChecked/> Dailymotion</label>
            </div>
          </div>
        </form>

        <form>
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.showCheckBoxes(".categoryCheckList")}>
              <select><option>Categories Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="categoryCheckList">
              <label><input type="checkbox" id="category1" defaultChecked/> All Categories</label>
              <label><input type="checkbox" id="category2"/> Category1</label>
              <label><input type="checkbox" id="category3"/> Category2</label>
              <label><input type="checkbox" id="category4"/> Category3</label>
            </div>
          </div>
        </form>
          
        <form>
          <div className="multiselect">
            <div className="selectBox" onClick={() => this.showCheckBoxes(".lengthCheckList")}>
              <select><option>Length Filter</option></select>
              <div className="overSelect"></div>
            </div>

            <div className="lengthCheckList">
              <label><input type="checkbox" id="length1" defaultChecked/> Short(min)</label>
              <label><input type="checkbox" id="length2" defaultChecked/> Long(min)</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}