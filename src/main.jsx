import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Subscriptions from "./components/Subscriptions.jsx";
import State from "./components/State.jsx";
import Students from "./components/Students.jsx";
import LifeCycle from "./components/LifeCycle.jsx";
import Crud from "./components/Crud.jsx";
import "./index.css";

// Create of the VDOM using the react-dom
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Crud />
  // </React.StrictMode>
);
