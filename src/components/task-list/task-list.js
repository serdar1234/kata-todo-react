import React from "react";
import '../../index.css';
import Task from "../task/task";

const TaskList = () => {
  return (
    <ul className="todo-list">
      <Task />
    </ul>
  )
}

export default TaskList;