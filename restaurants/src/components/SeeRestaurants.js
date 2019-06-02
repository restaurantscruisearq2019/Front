import React from "react";
import { Link } from "react-router-dom";

class SeeRestaurants extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui huge header">Restaurants</div>

          <div className="ui secondary vertical menu">
            <Link to="undefined" className="active item">
              BurguersHit
            </Link>
            <Link to="undefined" className="item">
              BurguersMegaHit
            </Link>
            <Link to="undefined" className="active item">
              BurguersHyperHit
            </Link>
            <Link to="undefined" className="item">
              VegieHit
            </Link>
            <Link to="undefined" className="active item">
              VegieMegaHit
            </Link>
            <Link to="undefined" className="item">
              VegieHyperHit
            </Link>
          </div>
        </div>
        <div className="eight wide column">
          <img
            alt=""
            className="ui middle aligned rounded fluid image"
            src="https://st2.depositphotos.com/1671840/7140/i/950/depositphotos_71403333-stock-photo-cruise-restaurant.jpg"
          />
        </div>
      </div>
    );
  }
}

export default SeeRestaurants;
