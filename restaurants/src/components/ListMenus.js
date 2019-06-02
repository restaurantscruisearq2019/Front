import React from "react";
import { Link } from "react-router-dom";

class ListMenus extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui huge header">Types of menus</div>

          <div className="ui secondary vertical menu">
            <Link to="undefined" className="active item">
              tasting
            </Link>
            <Link to="undefined" className="item">
              today's menu
            </Link>
            <Link to="undefined" className="active item">
              executive
            </Link>
            <Link to="undefined" className="item">
              fast foods
            </Link>
            <Link to="undefined" className="active item">
              for children
            </Link>
            <Link to="undefined" className="item">
              menu Link la carte
            </Link>
          </div>
        </div>
        <div className="eight wide column">
          <img
            alt=""
            className="ui middle aligned rounded fluid image"
            src="http://www.agendatuxtla.com/img/RESTAURANTES/LA%20MORENA/Cartas%20La%20Morena-01.jpg"
          />
        </div>
      </div>
    );
  }
}

export default ListMenus;
