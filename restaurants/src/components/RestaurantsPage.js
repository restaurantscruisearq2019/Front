import React from "react";
import gql from "graphql-tag";
import apollo from "../api/apollo";
import { Link } from "react-router-dom";

class RestaurantsPage extends React.Component {
  componentDidMount() {
    apollo
      .query({
        query: gql`
          {
            restaurants(id: "5cde27f0811c9e31d4566d04") {
              name
            }
          }
        `
      })
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">
              <Link to="/see">
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    className="ui image"
                  />
                  <br />
                  <h3 className="ui header">See Our Restaurants!</h3>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/reservations">
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    className="ui image"
                  />
                  <br />
                  <h3 className="ui header">Check your Reservation</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h4 className="ui horizontal header divider">Other Options:</h4>
        <div className="ui equal width stackable grid">
          <div className="center aligned row">
            <div className="column">
              <Link to="/menus">
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    className="ui image"
                  />
                  <br />
                  <h3 className="ui header">Menus</h3>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/prices">
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    className="ui image"
                  />
                  <br />
                  <h3 className="ui header">Prices</h3>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/categories">
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    className="ui image"
                  />
                  <br />
                  <h3 className="ui header">Categories</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsPage;
