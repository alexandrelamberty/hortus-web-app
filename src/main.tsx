import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/app/App";
import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApplicationContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApplicationContextProvider>
    </Provider>
  </React.StrictMode>
);
