import React, { useContext } from "react";
import { AppContext } from "../TodoContext";

const List = () => {
  const { todos } = useContext(AppContext);

  return <pre>{JSON.stringify(todos, undefined, 4)}</pre>;
};

export default List;
