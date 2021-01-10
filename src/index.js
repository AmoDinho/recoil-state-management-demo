import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { RecoilRoot, useRecoilValue } from "recoil";
import { circuitsQuery } from "./state/selectors";
//add the uri here
const client = new ApolloClient({
  uri: "",
});

console.log("circuitsQuery", circuitsQuery);

const CircuitBootstrap = () => {
  const circuits = useRecoilValue(circuitsQuery);
  return <></>;
};
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <CircuitBootstrap />
          <App />
        </ApolloProvider>
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
