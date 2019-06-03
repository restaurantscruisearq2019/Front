import React from "react";
import gql from "graphql-tag";

import apollo from "../api/apollo";

import ClientInformation from "./ClientInformation";
import ClientForm from "./ClientForm";

class ReservationPage extends React.Component {
  state = {
    id: null,
    date: new Date(),
    reservationInfo: {}
  };

  fetchReservations = () => {
    apollo
      .query({
        query: gql`
          {
            ClientDailyReservation(
              clientID: ${this.state.id}
              date: "${this.state.date.toString()}"
            ) {
              breakfast{
                name
                hour
              }
              lunch{
                name
                hour
              }
              dinner{
                name
                hour
              }
            }
          }
        `
      })
      .then(data => {
        console.log(data.data);
        this.setState({ reservationInfo: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderInfo() {
    if (this.state.id) {
      if (!this.state.reservationInfo) {
        return <ClientInformation info={this.state.reservationInfo} />;
      }
      return <h2>No info found</h2>;
    }
    return;
  }

  setId = id => {
    this.setState({ id }, () => {
      this.fetchReservations();
    });
  };

  render() {
    return (
      <div className="ui stackable middle aligned centered grid container">
        <div className="six wide column">
          <ClientForm setState={this.setId} />
          {this.renderInfo()}
        </div>
      </div>
    );
  }
}

export default ReservationPage;
