import React from "react";

class RestaurantsPage extends React.Component {
  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">
              <a href="see">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="ui image"
                />
                <br />
                <h3 className="ui header">See Our Restaurants!</h3>
              </a>
            </div>
            <div className="column">
              <a href="reservations">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="ui image"
                />
                <br />
                <h3 className="ui header">Check your Reservation</h3>
              </a>
            </div>
          </div>
        </div>
        <h4 className="ui horizontal header divider">Other Options:</h4>
        <div className="ui equal width stackable grid">
          <div className="center aligned row">
            <div className="column">
              <a href="menus">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="ui image"
                />
                <br />
                <h3 className="ui header">Menus</h3>
              </a>
            </div>
            <div className="column">
              <a href="prices">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="ui image"
                />
                <br />
                <h3 className="ui header">Prices</h3>
              </a>
            </div>
            <div className="column">
              <a href="categories">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="ui image"
                />
                <br />
                <h3 className="ui header">Categories</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsPage;
