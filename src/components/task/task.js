import React from "react";
import '../../index.css';

const Task = ({info}) => {
  const {description, createdAt, liClass} = info;
  let inputField = null;
  if (liClass === "editing") {
    inputField = (
      <input type="text" className="edit" value="Editing task" />
    )
  }
  return (
    <li className={ liClass }>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{createdAt}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      { inputField }
    </li>
  )
}

export default Task;