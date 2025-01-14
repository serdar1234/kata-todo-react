import React from "react";
import '../../index.css';
import Task from "../task/task";

const TaskList = ({todos}) => {

  const elements = todos.map((item) => {
    return < Task info={item} />
  })

  return (
    <ul className="todo-list">
      { elements }
    </ul>
  )
}

export default TaskList;