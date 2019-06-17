import React from "react";
import gql from "graphql-tag";
import apollo from "../api/apollo";
import CategoryCard from "./CategoryCard";

class Prices extends React.Component {
  state = {
    priceRange: null,
    priceRangeRestaurants: null
  };

  fetchRestaurants = a => {
    apollo
      .query({
        query: gql`
          {
            getRestaurantsByPricerange(priceRange: "${a}"){
              name
              _id
              description
              images
            }
          }
        `
      })
      .then(data => {
        this.setState({
          priceRangeRestaurants: data.data.getRestaurantsByPricerange
        });
        this.setState({ priceRange: a });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRestaurants() {
    if (!this.state.priceRangeRestaurants) {
      return <h2>Select a Price Range!</h2>;
    }
    return this.state.priceRangeRestaurants.map(r => {
      return (
        <CategoryCard
          key={r._id}
          name={r.name}
          description={r.description}
          images={r.images}
          category={this.state.priceRange}
        />
      );
    });
  }

  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="four wide column">
          <div className="ui header">Restaurants prices</div>
          <div className="ui secondary vertical pointing menu">
            <button
              onClick={() => this.fetchRestaurants("10-20")}
              className="item">
              10-20 (Dollars)
            </button>
            <button
              onClick={() => this.fetchRestaurants("20-30")}
              className="item">
              20-30 (Dollars)
            </button>
            <button
              onClick={() => this.fetchRestaurants("30-40")}
              className="item">
              30-40 (Dollars)
            </button>
            <button
              onClick={() => this.fetchRestaurants("40-50")}
              className="item">
              40-50 (Dollars)
            </button>
            <button
              onClick={() => this.fetchRestaurants("50-60")}
              className="item">
              50-60 (Dollars)
            </button>
          </div>
        </div>
        <div className="eight wide column internally celled grid">
          <div>{this.renderRestaurants()}</div>
        </div>
      </div>
    );
  }
}

export default Prices;
