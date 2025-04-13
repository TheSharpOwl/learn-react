import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit();
    setInput("");
  };

  return (
    <div className="todoForm">
      <input
        placeholder="Add a todo"
        value={props.value}
        onChange={handleChange}
        name="text"
        className="todoInput"
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="todoButton">
        Add todo
      </button>
    </div>
  );
}

export default TodoForm;
