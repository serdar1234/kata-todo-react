import React from "react";
import '../../index.css';
import Task from "../task";

const MyTaskList = ({ todos, onDelete, onEdit, 
  onDone, turnOnEdit }) => { 
  const tasks = todos.map((task) => {
    const {id} = task;

    return (
      < Task taskObject={task}
          onDelete={() => (onDelete(id))}
          onDone={() => (onDone(id))}
          onEdit={(newValue) => (onEdit(id, newValue))}
          turnOnEdit={() => (turnOnEdit(id))} key={id} />
    )
  })

  return (
    <ul className="todo-list">
      { tasks }
    </ul>
  )
}

export default MyTaskList;