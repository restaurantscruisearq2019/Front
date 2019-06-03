import React from "react";

import unsplash from "../api/unsplash";

class RestaurantCard extends React.Component {
  state = {
    img: ""
  };

  componentDidMount() {
    unsplash
      .get(`/search/photos?query=${this.props.restaurant.name}`)
      .then(data => {
        console.log(data.data.results[0].urls);
        this.setState({ img: data.data.results[0].urls.small });
      });
  }

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.state.img} />
        </div>
        <div className="content">
          <div className="header">{this.props.restaurant.name}</div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
