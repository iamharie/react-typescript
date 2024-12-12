import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  function handleForm(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    if (enteredText?.trim.length === 0) {
      return;
    }
    //This function is located in App component.
    //This function will  be called when the form is submitted
    props.onAddTodo(enteredText);
  }
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
