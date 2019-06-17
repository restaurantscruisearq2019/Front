import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: "http://ec2-3-84-165-200.compute-1.amazonaws.com:5000/graphql",
  //"uri: http://localhost:5000/graphql",
  headers: {
    authorization: localStorage.getItem("jwtToken")
  }
});

export const apolloAuth = new ApolloClient({
  uri: "http://ec2-3-84-165-200.compute-1.amazonaws.com:5000/auth"
  //uri: "http://localhost:5000/auth"
});
