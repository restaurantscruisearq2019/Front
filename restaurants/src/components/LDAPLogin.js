import React from "react";

import { connect } from "react-redux";

import { login } from "../actions/authActions";
import { Button, Form, Modal } from "semantic-ui-react";

class LDAPLogin extends React.Component {
  state = { authenticated: false, userName: "", password: "" };

  componentDidMount() {
    if (this.props.auth) {
      this.setState({
        authenticated: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      this.setState({
        authenticated: this.props.auth
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
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LDAPLogin);
