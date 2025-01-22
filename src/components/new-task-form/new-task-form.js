import React from "react";
import PropTypes from "prop-types"

const NewTaskForm = ({ onCreate }) => {
  const handleEnter = (evt) => {
    if (evt.target.value && evt.key === "Enter") {
      onCreate(evt.target.value);
      evt.target.value = ""
    }
  }
  return <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} 
  onKeyDown={handleEnter}/>
}

NewTaskForm.prototype = {
  onCreate: PropTypes.func.isRequired,
}

NewTaskForm.defaultProps = {
  onCreate: () => {console.log("onCreate was not passed in props")}
}

export default NewTaskForm; 