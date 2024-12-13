// import React from "react";
import Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items?: Todo[]; removeItems: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items?.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          //   removeItems={props.removeItems.bind(null, item.id)}
          removeItems={() => props.removeItems(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
