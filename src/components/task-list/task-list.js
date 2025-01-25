import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';
import Task from '../task';

const MyTaskList = ({ tasks = [], filterState = 0, onDelete, onEdit, onDone, turnOnEdit }) => {
  const taskListArray = tasks.map((task) => {
    const { id } = task;

    return (
      <Task
        taskObject={task}
        filterState={filterState}
        onDelete={() => onDelete(id)}
        onDone={() => onDone(id)}
        onEdit={(newValue) => onEdit(id, newValue)}
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
  tasks: PropTypes.array,
  filterState: PropTypes.number,
};

MyTaskList.defaultProps = {
  onDelete: () => {},
  turnOnEdit: () => {},
  onEdit: () => {},
  onDone: () => {},
  tasks: [],
  filterState: 0,
};

export default MyTaskList;
