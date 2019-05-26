import React from "react";

class ClientForm extends React.Component {
  render() {
    return (
      <form className="ui large form">
        <div className="field">
          <label>Enter your Id</label>
          <input type="text" name="first-name" placeholder="Client Id" />
        </div>
        <button className="ui button" type="submit">
          Check your Reservation
        </button>
      </form>
    );
  }
}

export default ClientForm;
