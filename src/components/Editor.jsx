import React, { useContext, useState } from "react";
import { AppContext } from "../TodoContext";

const Editor = () => {
  const [task, setTask] = useState("");
  const { createTodo } = useContext(AppContext);

  return (
    <div>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => createTodo(task)}>Save</button>
    </div>
  );
};

export default Editor;
