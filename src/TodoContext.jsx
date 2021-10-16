import React, { createContext, useState } from "react";

export const AppContext = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodo = (task) => {
    const todo = {
      id: Date.now(),
      task,
      done: false,
    };

    setTodos([todo, ...todos]);
  };

  return (
    <AppContext.Provider value={{ todos, createTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export default TodoContext;
