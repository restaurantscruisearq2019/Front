import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui secondary vertical menu">
            <Link to="undefined" className="active item">
              Burguers
            </Link>
            <Link to="undefined" className="item">
              Vegie
            </Link>
            <Link to="undefined" className="active item">
              Meats
            </Link>
            <Link to="undefined" className="item">
              Italian
            </Link>
            <Link to="undefined" className="active item">
              Pizza
            </Link>
            <Link to="undefined" className="item">
              Sea Food
            </Link>
          </div>
        </div>
        <div className="eight wide column internally celled grid">
          <div>
            <div className="ui centered red card">
              <div className="content">
                <div className="center aligned header">McDonalds</div>
              </div>
              <div className="extra content">
                <div className="center aligned author">
                  <i className="ui avatar image utensils icon" /> Burguers
                </div>
              </div>
            </div>
            <div className="ui centered red card">
              <div className="content">
                <div className="center aligned header">El Corral</div>
              </div>
              <div className="extra content">
                <div className="center aligned author">
                  <i className="ui avatar image utensils icon" /> Burguers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
