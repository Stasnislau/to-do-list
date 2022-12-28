import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/index.jsx";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // to delete in production


const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools, // to delete in production
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
