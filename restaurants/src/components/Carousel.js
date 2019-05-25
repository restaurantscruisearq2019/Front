import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
    <div>
      <img src="http://gloriosa.demo.weebpal.com/sites/default/files/banner/image/banner%20dining%202.jpg" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src="http://gloriosa.demo.weebpal.com/sites/default/files/banner/image/Dining_03.png" />
    </div>
    <div>
      <img src="http://gloriosa.demo.weebpal.com/sites/default/files/banner/image/banner%20dining%201.jpg" />
    </div>
  </Carousel>
);
