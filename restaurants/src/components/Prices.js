import React from "react";

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
              <a href="undefined" className="active item">
                BurguerHit
              </a>
              <a href="undefined" className="item">
                BurguerMegaHit
              </a>
              <a href="undefined" className="item">
                BurguerHyperHit
              </a>
              <a href="undefined" className="item">
                VegieHit
              </a>
              <a href="undefined" className="item">
                VegieMegaHit
              </a>
              <a href="undefined" className="item">
                VegieHyperHit
              </a>
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
