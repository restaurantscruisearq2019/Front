import React from "react";

class SeeRestaurants extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui huge header">Restaurants</div>

          <div className="ui secondary vertical menu">
            <a href="undefined" className="active item">
              BurguersHit
            </a>
            <a href="undefined" className="item">
              BurguersMegaHit
            </a>
            <a href="undefined" className="active item">
              BurguersHyperHit
            </a>
            <a href="undefined" className="item">
              VegieHit
            </a>
            <a href="undefined" className="active item">
              VegieMegaHit
            </a>
            <a href="undefined" className="item">
              VegieHyperHit
            </a>
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
