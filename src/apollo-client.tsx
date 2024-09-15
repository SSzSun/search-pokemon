import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app", // Replace with the correct API endpoint
  cache: new InMemoryCache(),
});

export default client;
