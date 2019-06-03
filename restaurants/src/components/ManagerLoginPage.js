import React from "react";

class ManagerLoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null
    };
  }

  handleUserChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({
      userName: value
    });
  };

  handlePassChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({
      password: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setState(this.state.userName, this.state.password);
  };

  render() {
    return (
      <div className="ui stackable middle aligned centered grid container">
        <div className="six wide column">
          <h2 className="ui centered header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="userName"
                    onChange={this.handleUserChange}
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    onChange={this.handlePassChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div onClick={this.handleSubmit} className="ui fluid large secondary submit button">
                Login
              </div>
            </div>
            <div className="ui error message" />
          </form>
        </div>
      </div>
    );
  }
}

export default ManagerLoginPage;
