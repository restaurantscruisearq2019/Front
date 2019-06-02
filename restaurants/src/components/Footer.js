import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="ui inverted vertical footer segment"
        /*style={{ position: "absolute", bottom: "0", width: "100%" }}*/
      >
        <div className="ui container">
          <div className="ui inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <Link to="undefined" className="item">
                  Sitemap
                </Link>
                <Link to="undefined" className="item">
                  Contact Us
                </Link>
                <Link to="undefined" className="item">
                  Religious Ceremonies
                </Link>
                <Link to="undefined" className="item">
                  Gazebo Plans
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <Link to="undefined" className="item">
                  Banana Pre-Order
                </Link>
                <Link to="undefined" className="item">
                  DNA FAQ
                </Link>
                <Link to="undefined" className="item">
                  How To Access
                </Link>
                <Link to="undefined" className="item">
                  Favorite X-Men
                </Link>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Footer Header</h4>
              <p>
                Extra space for Link call to action inside the footer that could
                help re-engage users.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
