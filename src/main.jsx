import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Subscriptions from "./Sample.jsx";
import "./index.css";

// Create of the VDOM using the react-dom
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Subscriptions />
  </React.StrictMode>
);
