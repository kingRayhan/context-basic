import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TodoContext from "./TodoContext";

ReactDOM.render(
  <TodoContext>
    <App />
  </TodoContext>,
  document.getElementById("app")
);
