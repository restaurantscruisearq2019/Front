import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="ui inverted vertical footer segment"
        /*style={{ position: "absolute", bottom: "0", width: "100%" }}*/
      >
        <div className="ui container">
          <div className="ui inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <Link to="/restaurants" className="item">
                  Restaurants
                </Link>
                <Link to="/reservations" className="item">
                  Check Reservation
                </Link>
                <Link to="/Schedule" className="item">
                  Schedule
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <Link to="/categories" className="item">
                  Categories
                </Link>
                <Link to="/menus" className="item">
                  Menus
                </Link>
                <Link to="/prices" className="item">
                  Check by Price Range
                </Link>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Restaurants</h4>
              <p>
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
