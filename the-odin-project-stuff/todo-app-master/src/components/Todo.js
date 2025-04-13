import React from "react";

const Todo = (props) => {
  return (
    <div className={"todoRow"}>
      <div>{props.todo}</div>
      <div className="icons"></div>
    </div>
  );
};

export default Todo;
