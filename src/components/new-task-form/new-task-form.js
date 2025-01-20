import React from "react";

const NewTaskForm = (props) => {
  const handleEnter = (evt) => {
    if (evt.target.value && evt.key === "Enter") {
      props.onCreate(evt.target.value);
      evt.target.value = ""
    }
  }
  return <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} 
  onKeyDown={handleEnter}/>
}

export default NewTaskForm; 