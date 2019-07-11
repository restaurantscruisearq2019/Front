import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../history";
import MenuS from "./Menu";
import LandingPage from "./LandingPage";
import RestaurantsPage from "./RestaurantsPage";
import SchedulePage from "./SchedulePage";
import ReservationPage from "./ReservationPage";
import StaffManagementPage from "./StaffManagementPage";
import Categories from "./Categories";
import Footer from "./Footer";
import SeeRestaurants from "./SeeRestaurants";
import ListMenus from "./ListMenus";
import Prices from "./Prices";
import StaffInfoPage from "./StaffInfoPage";
import LDAPLogin from "./LDAPLogin";

import { Segment, Menu, Icon, Sidebar } from "semantic-ui-react";
import { resetCurrentUser } from "../actions/authActions";

class App extends React.Component {
  state = { vis: false };

  componentDidMount() {
    if (localStorage.jwtToken) {
      this.props.resetCurrentUser();
    }
  }

  setVis = () => {
    this.setState({ vis: !this.state.vis });
  };

  render() {
    console.log("Using 0.1");
    return (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column"
        }}>
        {!this.props.auth && <LDAPLogin />}

        {this.props.auth && (
          <Router history={history}>
            <MenuS setVis={() => this.setVis()} />
            <Sidebar.Pushable
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
              as={Segment}
              attached="bottom">
              <Sidebar
                as={Menu}
                animation="overlay"
                visible={this.state.vis}
                icon="labeled"
                vertical
                inline
                inverted>
                <Link to="/">
                  <Menu.Item>
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/restaurants">
                  <Menu.Item>
                    <Icon name="utensils" />
                    Restaurants
                  </Menu.Item>
                </Link>
                <Link to="/schedule">
                  <Menu.Item>
                    <Icon name="calendar alternate" />
                    Schedule
                  </Menu.Item>
                </Link>
                <Link to="/reservations">
                  <Menu.Item>
                    <Icon name="user" />
                    Reservation
                  </Menu.Item>
                </Link>
                <Link to="/categories">
                  <Menu.Item>
                    <Icon name="th list" />
                    Categories
                  </Menu.Item>
                </Link>
              </Sidebar>
              <Sidebar.Pusher
                style={{ display: "flex", justifyContent: "center" }}>
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route
                    path="/restaurants"
                    exact
                    component={RestaurantsPage}
                  />
                  <Route path="/schedule" exact component={SchedulePage} />
                  <Route
                    path="/reservations"
                    exact
                    component={ReservationPage}
                  />
                  <Route path="/staff" exact component={StaffManagementPage} />
                  <Route path="/categories" exact component={Categories} />
                  <Route path="/staffinfo" exact component={StaffInfoPage} />

                  <Route path="/see" exact component={SeeRestaurants} />
                  <Route path="/menus" exact component={ListMenus} />
                  <Route path="/prices" exact component={Prices} />
                </Switch>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            <Footer />
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { resetCurrentUser }
)(App);
