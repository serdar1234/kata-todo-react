import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';
import Task from '../task';

const MyTaskList = ({ tasks = [], filterState = 0, onDelete, onEdit, onDone, turnOnEdit, editTimer }) => {
  const taskListArray = tasks.map((task) => {
    const { id } = task;

    return (
      <Task
        taskObject={task}
        filterState={filterState}
        onDelete={() => onDelete(id)}
        onDone={() => onDone(id)}
        onEdit={(newValue) => onEdit(id, newValue)}
        editTimer={(newValue) => editTimer(id, newValue)}
        turnOnEdit={() => turnOnEdit(id)}
        key={id}
      />
    );
  });

  return <ul className="todo-list">{taskListArray}</ul>;
};

MyTaskList.propTypes = {
  onDelete: PropTypes.func,
  turnOnEdit: PropTypes.func,
  onEdit: PropTypes.func,
  onDone: PropTypes.func,
  editTimer: PropTypes.func,
  tasks: PropTypes.array,
  filterState: PropTypes.number,
};

MyTaskList.defaultProps = {
  onDelete: () => {},
  turnOnEdit: () => {},
  onEdit: () => {},
  editTimer: () => {},
  onDone: () => {},
  tasks: [],
  filterState: 0,
};

export default MyTaskList;
