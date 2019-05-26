import React from "react";

class ClientInformation extends React.Component {
  render() {
    return (
      <div
        className="ui left aligned centered card"
        style={{ textAlign: "left" }}>
        <div className="content">
          <h1>Reservation</h1>
        </div>
        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Breakfast
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Location</h4>
            <h4>Hour</h4>
          </div>
        </div>

        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Lunch
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Location</h4>
            <h4>Hour</h4>
          </div>
        </div>

        <div className="ui styled accordion">
          <div className="title">
            <i className="dropdown icon" />
            Diner
          </div>
          <div className="content">
            <h4>Restaurant Name</h4>
            <h4>Location</h4>
            <h4>Hour</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientInformation;
