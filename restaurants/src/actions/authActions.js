import jwt_decode from "jwt-decode";
import { apolloAuth } from "../api/apollo";
import gql from "graphql-tag";

import { SET_CURRENT_USER, UNSET_CURRENT_USER } from "./types";

import {setError} from './errorActions'

export const login = (userName, password) => async dispatch => {
  const response = await apolloAuth.query({
    query: gql`
      {
        LDAPVerify(username: "${userName}", password: "${password}"){
          validate,
          userName,
          token
        }
      }
      `
  })
  .then(res => {
    dispatch(setCurrentUser(res.data.LDAPVerify));
  })
  .catch(err => {
    dispatch(setError());
  })
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({
    type: UNSET_CURRENT_USER
  });
};

export const setCurrentUser = ({ validate, userName, token }) => dispatch => {
  localStorage.setItem("jwtToken", token);

  dispatch({
    type: SET_CURRENT_USER,
    payload: userName
  });
};

export const resetCurrentUser = () => dispatch => {
  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token);
  const userName = decoded.userId;

  dispatch({
    type: SET_CURRENT_USER,
    payload: userName
  });
};
