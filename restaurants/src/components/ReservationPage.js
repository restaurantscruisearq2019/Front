import React from "react";
import ClientInformation from "./ClientInformation";
import ClientForm from "./ClientForm";
import "../styles/index.css";

class ReservationPage extends React.Component {
  render() {
    return (
      <div
        className="ui middle aligned center aligned grid"
        id="reservationgrid">
        <div className="column" id="reservationcolumn">
          <ClientForm />
          <ClientInformation />
        </div>
      </div>
    );
  }
}

export default ReservationPage;
