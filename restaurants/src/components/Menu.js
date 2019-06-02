import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical segment">
        <div className="ui inverted stackable massive menu">
          <MenuItem to="/" name="Home" />
          <MenuItem to="/restaurants" name="Restaurants" />
          <MenuItem to="/schedule" name="Schedule" />
          <MenuItem to="/reservations" name="Reservation" />
          <MenuItem to="/categories" name="Categories" />

          <div className="right menu">
            <MenuItem to="/staff" name="Staff" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
