import React from "react";

class ManagerLoginPage extends React.Component {
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
                    name="email"
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
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="ui fluid large secondary submit button">
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
