import React from "react";

class Prices extends React.Component{
	render(){
		return(
		<div id="reservationgrid" className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
          
          <div class="ui middle aligned grid">
  <div class="four wide column">
  <div className="ui huge header">Restaurant prices</div>
    <div class="ui vertical fluid tabular menu">
      <a class="active item">
        BurguerHit
      </a>
      <a class="item">
		BurguerMegaHit
      </a>
      <a class="item">
		BurguerHyperHit
      </a>
      <a class="item">
        VegieHit
      </a>
      <a class="item">
        VegieMegaHit
      </a>
      <a class="item">
        VegieHyperHit
      </a>
    </div>
  </div>
  <div class="twelve wide stretched column">
    <div class="ui segment">
<img class="ui middle aligned rounded fluid image"  src="https://pbs.twimg.com/media/B7fRc45IIAELZqP.jpg">
</img>
  </div>
  </div>
</div>
         </div>

		);
}
}

export default Prices;