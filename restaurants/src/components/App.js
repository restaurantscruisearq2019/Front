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

const App = () => {
  return (
    <div className="body">
      <Router history={history}>
        <Menu />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/restaurants" exact component={RestaurantsPage} />
          <Route path="/schedule" exact component={SchedulePage} />
          <Route path="/reservations" exact component={ReservationPage} />
          <Route path="/staff" exact component={StaffManagementPage} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/see" exact component={SeeRestaurants} />
          <Route path="/menus" exact component={ListMenus} />
          <Route path="/prices" exact component={Prices} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
