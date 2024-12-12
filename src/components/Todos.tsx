// import React from "react";

// interface Props;

const Todos: React.FC<{ items?: Array<string> }> = (props) => {
  return (
    <ul>
      {props.items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
