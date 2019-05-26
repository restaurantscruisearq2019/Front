import React from "react";

class Categories extends React.Component {

  render() {
    return(
      <div id="reservationgrid" className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
          <div className="five wide column">
            <div class="ui secondary vertical menu">
                <a class="active item">
                    Burguers
                </a>
                <a class="item">
                    Vegie
                </a>
                <a class="active item">
                    Meats
                </a>
                <a class="item">
                    Italian
                </a>
                <a class="active item">
                    Pizza
                </a>
                <a class="item">
                    Sea Food
                </a>
            </div>
          </div>
          <div className="eight wide column">
            <div class="ui raised segment">
                <a class="ui red ribbon label">Burguers Hit, Station 208</a>
                <img width="100%" src="http://www.wem.ca/media/356870/fatburger.jpg?center=0.68,0.50166666666666671&mode=crop&width=1920&height=395" />
                <a class="ui red ribbon label">Burguers MegaHit, Station 106</a>
                <img width="100%" src="http://www.wem.ca/media/355289/harveys-banner.png?anchor=center&mode=crop&width=1920&height=395" />
                <a class="ui red ribbon label">Burguers HyperHit, Station 312</a>
                <img width="100%" src="http://www.wem.ca/media/356731/cafelevi_20180222-16.jpg?crop=0,0.34149481142014326,0,0.35030156974294141&cropmode=percentage&width=1920&height=395" />
            </div>
          </div>
      </div>
    );
  }
}

export default Categories;
