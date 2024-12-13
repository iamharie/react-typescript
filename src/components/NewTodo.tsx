import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  function handleForm(event: React.FormEvent) {
    event.preventDefault();

    let enteredText = todoTextInputRef.current?.value || "";
    if (enteredText?.trim().length === 0) {
      return;
    }
    //This function is located in App component.
    //This function will  be called when the form is submitted
    props.onAddTodo(enteredText);
    console.log("clear");
  }

  return (
    <form onSubmit={handleForm} className={classes.form}>
      <label htmlFor="text">Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
