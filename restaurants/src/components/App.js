import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Menu from "./Menu";
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

const App = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Router history={history}>
        <Menu />
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/restaurants" exact component={RestaurantsPage} />
            <Route path="/schedule" exact component={SchedulePage} />
            <Route path="/reservations" exact component={ReservationPage} />
            <Route path="/staff" exact component={StaffManagementPage} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/staffinfo" exact component={StaffInfoPage} />
            <Route path="/see" exact component={SeeRestaurants} />
            <Route path="/menus" exact component={ListMenus} />
            <Route path="/prices" exact component={Prices} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
