import axios from "axios";
//import setAuthorizationToken from "../utils/setAuthorizationToken";
//import jwt_decode from "jwt-decode";
import apollo from "../api/apollo";
import gql from "graphql-tag";

import history from "../history";
import { SET_CURRENT_USER } from "./types";

/* export const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  history.push("/");
  return {
    type: "UNSET_CURRENT_USER"
  };
};

export const login = data => async dispatch => {
  console.log("Log Data");
  console.log(data);
  const response = await axios({
    method: "post",
    url: baseUrl + "user_token",
    responseType: "json",
    data: {
      auth: {
        email: data.email,
        password: data.password
      }
    }
  });

  const token = response.data.jwt;
  localStorage.setItem("jwtToken", token);
  setAuthorizationToken(token);
  const decoded = jwt_decode(token);
  const id = decoded.sub;

  const response2 = await axios({
    method: "get",
    url: baseUrl + "users/" + id,
    responseType: "json"
  });

  dispatch(setCurrentUser(response2.data.id));
}; */

export const setCurrentUser = (userName, password) => async dispatch => {
  console.log("hey");
  const response = await apollo.query({
    query: gql`
      {
        LDAPVerify(username: "${userName}", password: "${password}")
      }
      `
  });
  console.log(response);

  dispatch({
    type: SET_CURRENT_USER,
    payload: response.data
  });
};
