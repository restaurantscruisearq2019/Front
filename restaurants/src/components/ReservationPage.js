import React from "react";
import ClientInformation from "./ClientInformation";
import ClientForm from "./ClientForm";
import "../styles/index.css";

class ReservationPage extends React.Component {

  componentDidMount() {
    fetch('localhost:5000/reservationgroups/:id')
      .then((response) => {
        return response.json()
      })
      .then((reservations) => {
        this.setState({ reservations: reservations })
      })
  }

  render() {
    if(this.state.reservations.lenght){
      return (
        <div className="container-fluid">
        <ReservationList listado={this.state}/>
        </div>
        )
    }else{
    return (
      <div
        className="ui middle aligned center aligned grid"
        id="reservationgrid">
        <div className="column" id="reservationcolumn">
          <ClientForm />
          <ClientInformation />
        </div>
      </div>
    );}
  }
}

export default ReservationPage;
