import React from "react";

class ManagerLoginPage extends React.Component {
  render() {
    return(
      <div id="reservationgrid" class="ui middle aligned center aligned grid container">
        <div id="reservationcolumn" class="column">
          <h2 class="ui teal image header">
            <div class="content">
              Log-in to your account
            </div>
          </h2>
          <form class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div class="ui fluid large teal submit button">Login</div>
            </div>
            <div class="ui error message"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default ManagerLoginPage;
