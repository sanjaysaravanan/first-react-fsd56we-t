/* eslint-disable no-unused-vars */
// Normal CSS importing
import { useState } from "react";
import "./App.css";

// Module CSS Importing
// eslint-disable-next-line no-unused-vars
import styles from "./App.module.css";
import ToDos from "./components/ToDos";

// eslint-disable-next-line no-unused-vars
const todos = ["Read", "Eat", "Sleep"];

// eslint-disable-next-line no-unused-vars
const isDone = true;

function App() {
  const [mount, setMount] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const sampleFunc = (e) => {
    console.log(e.target);
    alert("Sample function");
  };

  const inputChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    console.log("############", e.target.elements);
  };

  return (
    <div>
      <h1>Sample Text</h1>
      {mount && <ToDos />}
      {/* {console.log(styles)} */}
      {/* Normal HTML */}
      {/* <buttton onclick="samplFunc()">Click Me</buttton> */}
      {/* JSX Syntax */}
      {/* Best Option to name  the fucntion and use in jsx use minimize recalculation of memory */}
      {/* <h1 className={styles["h1-custom"]}>FSD56WE-T</h1>
      <button onClick={sampleFunc} className={`${styles.btn} bg-primary`}>
        Click Me
      </button>
      <h2 className="bg-primary">FSD56WE-T</h2> */}
      {/* Same as above line */}
      {/* <button
        onClick={() => {
          alert("Anonymous function");
        }}
        className="btn"
      >
        Click Me
      </button>
      <form onSubmit={handleSubmit}>
        <input name="batch" id="batch" onChange={inputChange} />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default App;
