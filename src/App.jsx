import React from "react";
// Normal CSS importing
import "./App.css";

// Module CSS Importing
import styles from "./App.module.css";

const todos = ["Read", "Eat", "Sleep"];

const isDone = true;

const todosData = [
  { title: "Read", isDone: false },
  { title: "Eat", isDone: true },
  { title: "Sleep", isDone: false },
];

// component is a fucntion which returns JSX
const ToDos = () => {
  return (
    <>
      {/* Normal HTML  */}
      {/* <h1 style="border: 1px solid;background-color: green" >Todos App</h1> */}
      {/* JSX */}
      <h1 style={{ border: "1px solid", backgroundColor: "green" }}>
        Todos App
      </h1>
      {/* <h1>1. {todos[0]}</h1> */}
      {/* <h1>1. {todos[0]}</h1>
      <h1>2. {todos[1]}</h1>
      <h1>3. {todos[2]}</h1> */}
      {/* Array Rendering */}
      {/* {[
        <h1 key={todos[0]}>1. {todos[0]}</h1>,
        <h1>2. {todos[1]}</h1>,
        <h1>3. {todos[2]}</h1>,
      ]} */}
      {/* {todosData.map((val, i) => (
        <h1 key={val.title} style={{ color: val.isDone ? "green" : "red" }}>
          {i + 1}. {val.title}
        </h1>
      ))} */}
      {/* {todosData.map((val, i) => {
        return (
          <>
            {val.isDone && (
              <h1 key={val.title} style={{ color: "green" }}>
                {i + 1}. {val.title}
              </h1>
            )}
            {!val.isDone && (
              <h1 key={val.title} style={{ color: "red" }}>
                {i + 1}. {val.title}
              </h1>
            )}
          </>
        );
      })} */}
      {todosData.map((val, i) => (
        <React.Fragment key={val.title}>
          {val.isDone ? (
            <h1 style={{ color: "green" }}>
              {i + 1}. {val.title}
            </h1>
          ) : (
            <h1 style={{ color: "red" }}>
              {i + 1}. {val.title}
            </h1>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

function App() {
  const sampleFunc = (e) => {
    console.log(e);
    alert("Sample function");
  };

  const inputChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    console.log(e.target.elements);
  };

  return (
    <div>
      <ToDos />
      {console.log(styles)}
      {/* Normal HTML */}
      {/* <buttton onclick="samplFunc()">Click Me</buttton> */}
      {/* JSX Syntax */}
      {/* Best Option to name  the fucntion and use in jsx use minimize recalculation of memory */}
      <h1 className={styles["h1-custom"]}>FSD56WE-T</h1>
      <button onClick={sampleFunc} className={`${styles.btn} bg-primary`}>
        Click Me
      </button>
      <h2 className="bg-primary">FSD56WE-T</h2>
      {/* Same as above line */}
      <button
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
      </form>
    </div>
  );
}

export default App;
