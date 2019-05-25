import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui grey inverted stackable large fixed menu">
        <Link to="/restaurants">
          <a className="item">Restaurants</a>
        </Link>
        <Link to="/reservations">
          <a className="item"> Reservation </a>
        </Link>
        <div className="right menu">
          <Link to="/staff">
            <a className="item"> Staff </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
