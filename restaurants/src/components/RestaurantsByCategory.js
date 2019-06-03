import React from "react";

import RestaurantCard from "./RestaurantCard";

class RestaurantsByCategory extends React.Component {
  render() {
    const restaurant = {
      name: "McDonalds"
    };

    return (
      <div
        className="ui doubling stackable four cards container"
        style={{ height: "100%" }}>
        <RestaurantCard restaurant={restaurant} />
        <RestaurantCard restaurant={restaurant} />
        <RestaurantCard restaurant={restaurant} />

        <RestaurantCard restaurant={restaurant} />
        <RestaurantCard restaurant={restaurant} />
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  }
}

export default RestaurantsByCategory;
