import React, { useState } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    setValue("");
  };

  const handleSubmit = () => {
    addTodo(value);
  };

  return (
    <div className="todoApp">
      <h1>What do you want to do today?</h1>
      <TodoForm
        onChange={(newValue) => setValue(newValue)}
        onSubmit={handleSubmit}
        value={value}
      ></TodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
