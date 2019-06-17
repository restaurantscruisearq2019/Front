import React from "react";
import gql from "graphql-tag";
import apollo from "../api/apollo";
import CategoryCard from "./CategoryCard";

class ListMenus extends React.Component {
  state = {
    category: null,
    categoryMenuRestaurants: null
  };

  fetchRestaurants = a => {
    apollo
      .query({
        query: gql`
        {
          getRestaurantsByMenu(mType: "${a}"){
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
          categoryMenuRestaurants: data.data.getRestaurantsByMenu
        });
        this.setState({ category: a });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRestaurants() {
    if (!this.state.categoryMenuRestaurants) {
      return <h2>Select a Type of Menu!</h2>;
    }
    return this.state.categoryMenuRestaurants.map(r => {
      return (
        <CategoryCard
          key={r._id}
          name={r.name}
          description={r.description}
          images={r.images}
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

export default ListMenus;
