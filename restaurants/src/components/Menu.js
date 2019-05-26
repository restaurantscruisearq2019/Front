import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical segment">
        <div className="ui inverted stackable massive menu">
          <Link to="/">
            <a className="item">Home</a>
          </Link>
          <Link to="/restaurants">
            <a className="item">Restaurants</a>
          </Link>
          <Link to="/schedule">
            <a className="item">Schedule</a>
          </Link>
          <Link to="/reservations">
            <a className="item"> Reservation </a>
          </Link>
          <Link to="/categories">
            <a className="item"> Categories </a>
          </Link>
          <div className="right menu">
            <Link to="/staff">
              <a className="item"> Staff </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
