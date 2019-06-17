import React from "react";
import gql from "graphql-tag";
import { connect } from "react-redux";

import apollo from "../api/apollo";

import ClientInformation from "./ClientInformation";
import ClientForm from "./ClientForm";

class ReservationPage extends React.Component {
  state = {
    id: null,
    date: new Date(),
    reservationInfo: null
  };

  fetchReservations = () => {
    console.log(this.props.id);
    apollo
      .query({
        query: gql`
          {
            ClientDailyReservation(
              clientID: ${this.props.id}
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
    console.log(this.state.id);
    if (this.props.id) {
      if (!this.state.reservationInfo) {
        return (
          <div
            className="ui left aligned centered fluid card"
            style={{ textAlign: "center" }}>
            <div className="content">
              <h1>No Info Found</h1>
            </div>
          </div>
        );
      }
      return <ClientInformation info={this.state.reservationInfo} />;
    }
    return;
  }

  setId = id => {
    this.setState({ id }, () => {
      this.fetchReservations();
    });
  };

  componentDidMount() {
    console.log(this.props.id);
    if (this.props.id) {
      this.fetchReservations();
    }
  }

  render() {
    return (
      <div className="ui stackable middle aligned centered grid container">
        <div className="six wide column">
          {/* <ClientForm setState={this.setId} /> */}
          {this.renderInfo()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(ReservationPage);
