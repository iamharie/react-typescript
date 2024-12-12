// import React from "react";
import Todo from "../models/todo.ts";
import TodoItems from "./TodoItems.tsx";

const Todos: React.FC<{ items?: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items?.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItems key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
