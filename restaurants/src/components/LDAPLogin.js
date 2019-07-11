import React from "react";
import isEmpty from "lodash/isEmpty";

import { connect } from "react-redux";

import { login } from "../actions/authActions";
import { Button, Form, Modal, Header } from "semantic-ui-react";

class LDAPLogin extends React.Component {
  state = { authenticated: false, userName: "", password: "", error: false };

  componentDidMount() {
    if (this.props.auth) {
      this.setState({
        authenticated: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log("update ",this.props)
    if (prevProps.auth !== this.props.auth) {
      this.setState({   
        error: this.props.error
      });
    }
    if (prevProps.error !== this.props.error) {
      this.setState({
        error: !isEmpty(this.props.error)
      });
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.login(this.state.userName, this.state.password);
  };

  render() {
    const { userName, password } = this.state;
    //console.log(this.state);

    return (
      <Modal
        size={"mini"}
        open={this.state.authenticated ? false : true}
        style={{ alignContent: "center" }}>
        <Modal.Header>Please login into the Aplication</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              required
              label="User Name"
              placeholder="User Name"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <Button
              fluid
              primary
              type="submit"
              onClick={() => this.handleSubmit()}>
              Submit
            </Button>
          </Form>
          { this.state.error &&
          <Header as='h2' color='red' textAlign='center'>Invalid Credentials</Header>
          }
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.errors)
  return {
    auth: state.auth.isAuthenticated,
    error: state.errors
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LDAPLogin);
