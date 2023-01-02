import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// import "semantic-ui-less/semantic.less";
import App from "./components/app/App";
import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicationContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
