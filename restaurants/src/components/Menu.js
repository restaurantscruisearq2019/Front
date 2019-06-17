import React from "react";
import { connect } from "react-redux";

import MenuItem from "./MenuItem";
import { logout } from "../actions/authActions";

class MenuS extends React.Component {
  state = { width: 0, height: 0, sidebarVisibility: false };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  setVisibility = () => {
    this.props.setVis();
    this.setState({ sidebarVisibility: !this.state.sidebarVisibility });
  };

  handleLogout = () => {
    this.props.logout();
  };

  renderItems = () => {
    if (this.state.width > 767) {
      if (this.state.sidebarVisibility === true) this.setVisibility();
      return (
        <div className="left menu">
          <MenuItem to="/" name="Home" />
          <MenuItem to="/restaurants" name="Restaurants" />
          <MenuItem to="/schedule" name="Schedule" />
          <MenuItem to="/reservations" name="Reservation" />
          <MenuItem to="/categories" name="Categories" />
        </div>
      );
    }
    return (
      <a onClick={this.setVisibility} className="icon item">
        <i className="bars icon" />
      </a>
    );
  };

  render() {
    return (
      <div className="ui inverted vertical segment">
        <div className="ui inverted massive menu">
          {this.renderItems()}
          <div className="right menu">
            <MenuItem to="/staff" name="Staff" />
            <a onClick={() => this.handleLogout()} className="icon item">
              <i className="logout icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(MenuS);
