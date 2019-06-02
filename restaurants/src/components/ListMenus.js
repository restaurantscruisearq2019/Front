import React from "react";

class ListMenus extends React.Component {
  render() {
    return (
      <div
        id="reservationgrid"
        className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
        <div className="five wide column">
          <div className="ui huge header">Types of menus</div>

          <div className="ui secondary vertical menu">
            <a href="undefined" className="active item">
              tasting
            </a>
            <a href="undefined" className="item">
              today's menu
            </a>
            <a href="undefined" className="active item">
              executive
            </a>
            <a href="undefined" className="item">
              fast foods
            </a>
            <a href="undefined" className="active item">
              for children
            </a>
            <a href="undefined" className="item">
              menu a la carte
            </a>
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
