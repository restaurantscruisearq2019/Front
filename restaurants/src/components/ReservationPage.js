import React from "react";
import ClientInformation from "./ClientInformation";
import ClientForm from "./ClientForm";
import "../styles/index.css";

class ReservationPage extends React.Component {
  state = {
    id: null
  };

  renderInfo() {
    if (this.state.id) return <ClientInformation />;
    return;
  }

  setId = id => {
    this.setState({ id });
  };

  render() {
    return (
      <div
        className="ui middle aligned center aligned grid"
        id="reservationgrid">
        <div className="column" id="reservationcolumn">
          <ClientForm setState={this.setId} />
          {this.renderInfo()}
        </div>
      </div>
    );
  }
}

export default ReservationPage;
