import React from "react";

class SeeRestaurants extends React.Component {

  render() {
    return(
      <div id="reservationgrid" className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
          
          <div className="five wide column">

            <div className="ui huge header">Restaurants</div>

              <div class="ui secondary vertical menu">
                <a href="undefined" class="active item">
                    BurguersHit
                </a>
                <a href="undefined" class="item">
                    BurguersMegaHit
                </a>
                <a href="undefined" class="active item">
                    BurguersHyperHit
                </a>
                <a href="undefined" class="item">
                    VegieHit
                </a>
                <a href="undefined" class="active item">
                    VegieMegaHit
                </a>
                <a href="undefined" class="item">
                    VegieHyperHit
                </a>
            </div>
          </div>
          <div className="eight wide column">
            <img alt="" class="ui middle aligned rounded fluid image" src="https://st2.depositphotos.com/1671840/7140/i/950/depositphotos_71403333-stock-photo-cruise-restaurant.jpg">
            </img>
          </div>
      </div>
    );
  }
}

export default SeeRestaurants;
