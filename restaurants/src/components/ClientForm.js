import React from "react";
import { ECONNRESET } from "constants";

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;

    this.setState({
      id: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setState(this.state.id);
  };

  render() {
    return (
      <div
        id="reservationgrid"
        className="ui middle aligned center aligned grid container">
        <div id="reservationcolumn" className="column">
          <h2 className="ui  image header">
            <div className="content">Check your reservation!</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    placeholder="Client Id"
                    onChange={this.handleChange}
                    value={this.state.id}
                  />
                </div>
              </div>
              <button
                className="ui fluid secondary large submit button"
                onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
            <div className="ui error message" />
          </form>
        </div>
      </div>
    );
  }
}

export default ClientForm;
