import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical segment">
        <div className="ui inverted stackable massive menu">
          
            <a href="/" className="item">Home</a>
          
            <a href="/restaurants" className="item">Restaurants</a>
          
            <a href="/schedule" className="item">Schedule</a>
         
            <a href="/reservations" className="item"> Reservation </a>
         
            <a href="/categories" className="item"> Categories </a>

          <div className="right menu">

              <a href="/staff" className="item"> Staff </a>

          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
