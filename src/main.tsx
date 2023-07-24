import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/app/App";
import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider";
import "./index.css";
import { store } from "./store/store";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Flowbite>
      <Provider store={store}>
        <ApplicationContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApplicationContextProvider>
      </Provider>
    </Flowbite>
  </React.StrictMode>
);
