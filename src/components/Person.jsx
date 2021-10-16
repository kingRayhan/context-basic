import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old
      </h1>
    </div>
  );
};

export default Person;
