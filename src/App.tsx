import "./App.css";

import NewTodo from "./components/NewTodo.tsx";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";

function App() {
  const todos = [new Todo("learn"), new Todo("js")];
  console.log(todos);

  const AddTodoHandler = (text: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={AddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
