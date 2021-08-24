import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const REACT_APP_DOMAIN = process.env.REACT_APP_DOMAIN;
const REACT_APP_CIENT_ID = process.env.REACT_APP_CIENT_ID;


ReactDOM.render(
  <Auth0Provider
    domain = { REACT_APP_DOMAIN}
    clientId="YOUR_CLIENT_ID"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);