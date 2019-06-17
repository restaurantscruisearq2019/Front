import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CategoryCard = ({ name, category, description, images }) => {
  return (
    <div className="ui fluid centered red card">
      <div className="content">
        <div className="center aligned header">{name}</div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <i className="ui avatar image utensils icon" /> {category}
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned">{description}</div>
      </div>
      <div className="extra content">
        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
          <div>
            <img alt="" src={images} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCard;
