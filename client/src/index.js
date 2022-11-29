import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

refreshPage();
export function refreshPage() {
  const client = new ApolloClient({
    uri: "http://localhost:3333/graphql",
    cache: new InMemoryCache(),
  });

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  );
}
