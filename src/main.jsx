import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Subscriptions from "./components/Subscriptions.jsx";
import State from "./components/State.jsx";
import Students from "./components/Students.jsx";
import LifeCycle from "./components/LifeCycle.jsx";
import Crud from "./components/Crud.jsx";
import ChildrenComp from "./components/ChildrenComp.jsx";
import PropsDrilling from "./components/PropsDrilling.jsx";
import PropsDrillingOptimised from "./components/PropsDrilling-Optimised.jsx";
import ContextLearning from "./components/ContextLearning.jsx";
import ContextLearningTask from "./components/ContextLearning-Task.jsx";
import ReferenceExample from "./components/ReferenceExamples.jsx";
import ReducerComponent from "./components/UseReducer.jsx";
import Reference from "./components/Reference.jsx";
import "./index.css";

// Create of the VDOM using the react-dom
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <ChildrenComp>
  //   <div>
  //     <h3>Batch: FSD56WE-T</h3>
  //     <h3>Mentor: Sanjay</h3>
  //   </div>
  // </ChildrenComp>
  // <PropsDrilling />
  // <PropsDrillingOptimised />
  // <ContextLearning />
  <ReducerComponent />
  // </React.StrictMode>
);
