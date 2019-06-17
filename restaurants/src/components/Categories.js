import React from "react";
import gql from "graphql-tag";
import apollo from "../api/apollo";
import CategoryCard from "./CategoryCard";

class Categories extends React.Component {
  state = {
    category: null,
    categoryRestaurants: null
  };

  fetchRestaurants = a => {
    apollo
      .query({
        query: gql`
          {
            getRestaurantsByCategories(category: "${a}") {
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
          categoryRestaurants: data.data.getRestaurantsByCategories
        });
        this.setState({ category: a });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRestaurants() {
    if (!this.state.categoryRestaurants) {
      return <h2>Select a Category!</h2>;
    }
    return this.state.categoryRestaurants.map(r => {
      return (
        <CategoryCard
          key={r._id}
          description={r.description}
          images={r.images}
          name={r.name}
          category={this.state.category}
        />
      );
    });
  }

  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui secondary vertical menu">
            <button
              onClick={() => this.fetchRestaurants("Burguers")}
              className="active item">
              Burguers
            </button>
            <button
              onClick={() => this.fetchRestaurants("Vegie")}
              className="active item">
              Vegie
            </button>
            <button
              onClick={() => this.fetchRestaurants("Meats")}
              className="active item">
              Meats
            </button>
            <button
              onClick={() => this.fetchRestaurants("Italian")}
              className="active item">
              Italian
            </button>
            <button
              onClick={() => this.fetchRestaurants("Pizza")}
              className="active item">
              Pizza
            </button>
            <button
              onClick={() => this.fetchRestaurants("Sushi")}
              className="active item">
              Sushi
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

export default Categories;
