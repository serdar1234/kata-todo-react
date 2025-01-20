import React from "react";
import '../../index.css';
import Task from "../task";

const MyTaskList = ({ todos, onDelete, onEdit }) => { 
  const tasks = todos.map((task) => {
    const {id, ...itemProps} = task;

    return (
      < Task info={itemProps}
          onDelete={() => (onDelete(id))}
          onEdit={() => (onEdit(id))} key={id} />
    )
  })

  return (
    <ul className="todo-list">
      { tasks }
    </ul>
  )
}

export default MyTaskList;