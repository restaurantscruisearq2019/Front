import React from "react";
import StaffInfoPage from "./StaffInfoPage";
import ManagerLoginPage from "./ManagerLoginPage";
import gql from "graphql-tag";
import apollo from "../api/apollo";

class StaffManagementPage extends React.Component {

  state = {
    userName: null,
    password: null,
    loginErr: null,
    loginInfo: null
  }
  
  fetchManager = () => {
    apollo
      .query({
        query: gql`
        {
          verifyManager(userName: "${this.state.userName}", password: "${this.state.password}"){
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
        if(data.data.verifyManager){
          this.setState({ loginInfo: data.data.verifyManager })
        } else {
          this.setState({ loginErr: "Incorrect Username or Password" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  setUser = (Username, Password) => {
    this.setState({ userName: Username, password: Password }, () => {
      this.fetchManager();
    });
  };
  
  renderState(){
    if (this.state.loginInfo) {
      return <StaffInfoPage userInfo={this.state.loginInfo} />;
    };
    if (this.state.loginErr) {
      return (
        <div>
          <ManagerLoginPage setState={this.setUser}/>
          <h2>{this.state.loginErr}</h2>
        </div>
        );
    };
    return <ManagerLoginPage setState={this.setUser}/>;
  };


  render() {
    return (this.renderState())}
}

export default StaffManagementPage;
