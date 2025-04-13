import React from "react";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <>
      {props.todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
}

export default React.memo(TodoList);