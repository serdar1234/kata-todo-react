import React from "react";
import '../../index.css';

function Task({onDelete, onEdit, taskObject}) {
  const {liClass, description, createdAt} = taskObject;

  let done = (liClass === "completed");
  let editing = (liClass === "editing");
  let inputField = null;

  const toggleDone = (event) => {
    if (event.target.className === "toggle" ||
      event.target.className.includes('icon') ||
      editing) return;
    console.log(event.target.className);
    done = !done;
  }
  const toggleCheckbox = () => {
    // console.log('checks')
    done = !done;
  }
  
  if (editing) {
    inputField = (
      <input type="text" className="edit" 
      value={description} />
    )
  }
  const computedLiClass = done ? "completed" : (editing ? "editing" : "");

  return (
    <li className={ computedLiClass } onClick={toggleDone}>
      <div className="view">
        <input className="toggle" type="checkbox" 
          checked={done}
          onChange={toggleCheckbox}
          />
        <label>
          <span className="description">{description}</span>
          <span className="created">{createdAt}</span>
        </label>
        <button 
          className="icon icon-edit"
          onClick={() => onEdit()}></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete()}></button>
      </div>
      { inputField }
    </li>
  )
}

export default Task;