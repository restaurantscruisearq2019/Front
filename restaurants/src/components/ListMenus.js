import React from "react";

class ListMenus extends React.Component {
	render(){
		return(
			<div id="reservationgrid" className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
          
          <div className="five wide column">

            <div className="ui huge header">Types of menus</div>

              <div class="ui secondary vertical menu">
                <a class="active item">
                    tasting
                </a>
                <a class="item">
                    today's menu
                </a>
                <a class="active item">
                    executive
                </a>
                <a class="item">
                    fast foods
                </a>
                <a class="active item">
                    for children
                </a>
                <a class="item">
                    menu a la carte
                </a>
            </div>
          </div>
          <div className="eight wide column">
            <img class="ui middle aligned rounded fluid image" src="http://www.agendatuxtla.com/img/RESTAURANTES/LA%20MORENA/Cartas%20La%20Morena-01.jpg">
            </img>
          </div>
         </div>


			);
	}
}

export default ListMenus;