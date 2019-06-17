import React from "react";
import StaffInfoPage from "./StaffInfoPage";
import ManagerLoginPage from "./ManagerLoginPage";
import gql from "graphql-tag";
import apollo from "../api/apollo";
import { connect } from "react-redux";

class StaffManagementPage extends React.Component {
  state = {
    userName: null,
    password: null,
    loginErr: null,
    loginInfo: null
  };

  fetchManager = () => {
    console.log(this.props.userName);
    apollo
      .query({
        query: gql`
        {
          verifyManager(username: "${this.props.userName}"){
            _id
            name
            employees{
              _id
              name 
              office
            }
          }
        }
        `
      })
      .then(data => {
        if (data.data.verifyManager) {
          this.setState({ loginInfo: data.data.verifyManager });
        } else {
          this.setState({ loginErr: "Incorrect Username or Password" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  /* setUser = (Username, Password) => {
    this.setState({ userName: Username, password: Password }, () => {
      this.fetchManager();
    });
  }; */

  setUser = Username => {
    this.setState({ userName: Username }, () => {
      this.fetchManager();
    });
  };

  componentDidMount() {
    this.fetchManager();
  }

  renderState() {
    if (this.state.loginInfo) {
      return <StaffInfoPage userInfo={this.state.loginInfo} />;
    }

    return (
      <div className="ui stackable middle aligned centered grid container">
        <div className="six wide column">
          <div
            className="ui left aligned centered fluid card"
            style={{ textAlign: "center" }}>
            <div className="content">
              <h1>No Info Found</h1>
            </div>
          </div>
        </div>
      </div>
    );

    /* if (this.state.loginErr) {
      return (
        <div>
          <ManagerLoginPage setState={this.setUser} />
          <h2>{this.state.loginErr}</h2>
        </div>
      );
    }
    return <ManagerLoginPage setState={this.setUser} />; */
  }

  render() {
    return this.renderState();
  }
}

const mapStateToProps = state => {
  return {
    userName: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(StaffManagementPage);
