import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Menu from "./Menu";
import LandingPage from "./LandingPage";
import RestaurantsPage from "./RestaurantsPage";
import SchedulePage from "./SchedulePage";
import ReservationPage from "./ReservationPage";
import StaffManagementPage from "./StaffManagementPage";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="body">
      <Router history={history}>
        <div className="body">
          <Menu />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/restaurants" exact component={RestaurantsPage} />
            <Route path="/schedule" exact component={SchedulePage} />
            <Route path="/reservations" exact component={ReservationPage} />
            <Route path="/staff" exact component={StaffManagementPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
