import React from "react";
//import StaffInfoPage from "./StaffInfoPage";
import ManagerLoginPage from "./ManagerLoginPage";

class StaffManagementPage extends React.Component {
  render() {
    return (
      <div id="reservationgrid" className="ui container">
        <ManagerLoginPage />
      </div>
    );
  }
}

export default StaffManagementPage;
