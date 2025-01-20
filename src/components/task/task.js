import React, { useState } from "react";
import '../../index.css';

function Task({onDelete, turnOnEdit, onEdit, onDone, taskObject}) {
  let {done, editMode, description, createdAt} = taskObject;
  const [startVal, editStartVal] = useState(description);

  let inputField = null;

  const catchInput = (evt) => {
    editStartVal(evt.target.value)
  }
  const updateTodo = (evt) => {
    if (evt.key === 'Enter') {
      onEdit(startVal)
    } else if (evt.key === 'Escape' &&
      startVal !== description) {
      let answer = window.confirm("Are you sure you want to exit? All unsaved changes will be lost!");
      if (answer) {
        onEdit(description);
        editStartVal(description)
      }
    } else if (evt.key === 'Escape') {
        onEdit(description);
    }
  }
  const clickHandler = (evt) => {
    if(evt.target.classList.contains("icon-edit"))    return;
    if(evt.target.classList.contains("icon-destroy")) return;
    onDone();
  }

  if (editMode) {
    inputField = (
      <input type="text" className="edit"
       value={startVal}
       onChange={catchInput}
       onKeyDown={updateTodo}
       autoFocus={true}/>
    )
  }
  const computedLiClass = done ? "completed" : (editMode ? "editing" : "");

  return (
    <li className={ computedLiClass } onClick={clickHandler}>
      <div className="view">
        <input className="toggle" type="checkbox" 
          checked={done}
          onChange={() => {}}
          />
        <label>
          <span className="description">{description}</span>
          <span className="created">{createdAt}</span>
        </label>
        <button 
          className="icon icon-edit"
          onClick={() => turnOnEdit()}></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete()}></button>
      </div>
      { inputField }
    </li>
  )
}

export default Task;