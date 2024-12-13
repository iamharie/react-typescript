import { useState } from "react";
import "./App.css";

import NewTodo from "./components/NewTodo.tsx";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import CompOne from "./components/CompOne.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("learn"), new Todo("js")];
  // console.log(todos);

  const addTodoHandler = (text: string) => {
    console.log("working");
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  console.log();

  function removeItems(id: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeItems={removeItems} />
      <CompOne name="Hari" />
    </div>
  );
}

export default App;
