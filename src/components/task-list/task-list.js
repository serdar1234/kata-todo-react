import React from "react";
import PropTypes from "prop-types"
import '../../index.css';
import Task from "../task";

const MyTaskList = ({ tasks=[], filterState=0, onDelete, onEdit, 
  onDone, turnOnEdit }) => { 
  const taskListArray = tasks.map((task) => {
    const {id} = task;

    return (
      < Task taskObject={task}
          filterState={filterState}
          onDelete={() => (onDelete(id))}
          onDone={() => (onDone(id))}
          onEdit={(newValue) => (onEdit(id, newValue))}
          turnOnEdit={() => (turnOnEdit(id))} key={id} />
    )
  })

  return (
    <ul className="todo-list">
      { taskListArray }
    </ul>
  )
}

Task.prototype = {
  onDelete: PropTypes.func.isRequired,
  turnOnEdit: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  filterState: PropTypes.number
}

Task.defaultProps = {
  onDelete: () => {},
  urnOnEdit: () => {},
  onEdit: () => {},
  onDone: () => {},
  tasks: [],
  filterState: 0
}

export default MyTaskList;