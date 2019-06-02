import React from "react";
import { Link } from "react-router-dom";

class Prices extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="ui middle aligned grid">
          <div className="four wide column">
            <div className="ui huge header">Restaurant prices</div>
            <div className="ui vertical fluid tabular menu">
              <Link to="undefined" className="active item">
                BurguerHit
              </Link>
              <Link to="undefined" className="item">
                BurguerMegaHit
              </Link>
              <Link to="undefined" className="item">
                BurguerHyperHit
              </Link>
              <Link to="undefined" className="item">
                VegieHit
              </Link>
              <Link to="undefined" className="item">
                VegieMegaHit
              </Link>
              <Link to="undefined" className="item">
                VegieHyperHit
              </Link>
            </div>
          </div>
          <div className="twelve wide stretched column">
            <div className="ui segment">
              <img
                alt=""
                className="ui middle aligned rounded fluid image"
                src="https://pbs.twimg.com/media/B7fRc45IIAELZqP.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
