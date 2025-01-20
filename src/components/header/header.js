import React from "react";
import NewTaskForm from "../new-task-form";
import '../../index.css';

const Header = (props) => {
  return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onCreate={(txt) => props.onCreate(txt)} />
      </header>
  );
};

export default Header;