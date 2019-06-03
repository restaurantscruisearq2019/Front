import React from "react";

import RestaurantCard from "./RestaurantCard";

class RestaurantsByCategory extends React.Component {
  render() {
    const restaurant = {
      name: "McDonalds"
    };

    return (
      <div
        className="ui left aligned centered fluid card"
        style={{ textAlign: "left" }}>
        <div className="content">
          <h1>Reservation</h1>
        </div>
        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Breakfast
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Hour</h4>
          </div>
        </div>

        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Lunch
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Hour</h4>
          </div>
        </div>

        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Diner
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Hour</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsByCategory;
