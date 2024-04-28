import { useState } from "react";
import ToDo from "./ToDo";

const todosData = [
  { title: "Read", isDone: false },
  { title: "Eat", isDone: true },
  { title: "Sleep", isDone: false },
];

// component is a fucntion which returns JSX
const ToDos = () => {
  // Todos as a state value
  const [todos, setTodos] = useState(todosData);

  const inputChange = (e) => {
    console.log(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.elements.todo.value,
      isDone: false,
    };
    console.log(obj);
    console.log([...todos, obj]);
    setTodos([...todos, obj]);
  };

  return (
    <>
      {/* Normal HTML  */}
      {/* <h1 style="border: 1px solid;background-color: green" >Todos App</h1> */}
      {/* JSX */}
      <h1 style={{ border: "1px solid", backgroundColor: "green" }}>
        Todos App
      </h1>

      <form onSubmit={addTodo}>
        <input name="todo" id="todo" onChange={inputChange} />
        <input type="submit" value="Add Todo" />
      </form>
      {/* {todosData.map((val, i) => (
        <ToDo key={val.title} title={val.title} isDone={val.isDone} index={i} />
      ))} */}
      {todos.map((val, i) => (
        <ToDo
          key={val.title}
          index={i}
          {...val}
          Icon={<i className="fa-brands fa-windows"></i>}
        />
      ))}
    </>
  );
};

export default ToDos;
