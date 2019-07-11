import ApolloClient from "apollo-boost";
import { ApolloLink, concat } from "apollo-link";
import { HttpLink, createHttpLink } from "apollo-link-http";

export default new ApolloClient({
  //uri: "http://localhost:5000/graphql",
  uri: "/graphql",
  request: async operation => {
    const token = await localStorage.getItem("jwtToken");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
});

/* export default new ApolloClient({
  uri: "http://ec2-3-84-165-200.compute-1.amazonaws.com:5000/graphql",
  link: concat(authMiddleware, httpLink)
}); */

export const apolloAuth = new ApolloClient({
  uri: "/auth"
  //uri: "http://localhost:5000/auth"
});
