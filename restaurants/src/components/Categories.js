import React from "react";

class Categories extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui secondary vertical menu">
            <a href="undefined" className="active item">
              Burguers
            </a>
            <a href="undefined" className="item">
              Vegie
            </a>
            <a href="undefined" className="active item">
              Meats
            </a>
            <a href="undefined" className="item">
              Italian
            </a>
            <a href="undefined" className="active item">
              Pizza
            </a>
            <a href="undefined" className="item">
              Sea Food
            </a>
          </div>
        </div>
        <div className="eight wide column">
          <div className="ui raised segment">
            <a href="undefined" className="ui red ribbon label">
              Burguers Hit, Station 208
            </a>
            <img
              width="100%"
              alt=""
              src="http://www.wem.ca/media/356870/fatburger.jpg?center=0.68,0.50166666666666671&mode=crop&width=1920&height=395"
            />
            <a href="undefined" className="ui red ribbon label">
              Burguers MegaHit, Station 106
            </a>
            <img
              width="100%"
              alt=""
              src="http://www.wem.ca/media/355289/harveys-banner.png?anchor=center&mode=crop&width=1920&height=395"
            />
            <a href="undefined" className="ui red ribbon label">
              Burguers HyperHit, Station 312
            </a>
            <img
              width="100%"
              alt=""
              src="http://www.wem.ca/media/356731/cafelevi_20180222-16.jpg?crop=0,0.34149481142014326,0,0.35030156974294141&cropmode=percentage&width=1920&height=395"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
