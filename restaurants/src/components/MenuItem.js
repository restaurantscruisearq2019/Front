import React from "react";
import { Link } from "react-router-dom";

class MenuItem extends React.Component {
  render() {
    const data = this.props;
    return (
      <Link to={data.to} className="item">
        <div>{data.name}</div>
      </Link>
    );
  }
}

export default MenuItem;
