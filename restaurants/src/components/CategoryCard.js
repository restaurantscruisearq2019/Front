import React from "react";

const CategoryCard = ({ name, category}) => {
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
        </div>
    );
}

export default CategoryCard;
