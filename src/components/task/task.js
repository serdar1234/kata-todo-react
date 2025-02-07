import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../timer';
import '../../index.css';

const Task = ({ onDelete, turnOnEdit, editTimer, onEdit, onDone, taskObject = {}, filterState = 0 }) => {
  const { done, editMode, description, createdAt, id: taskID, timer } = taskObject;
  const [startVal, editStartVal] = useState(description);
  const isVisible = { display: 'list-item' };

  let inputField = null;
  const catchInput = (evt) => {
    editStartVal(evt.target.value);
  };
  const updateTodo = (evt) => {
    if (evt.key === 'Enter') {
      onEdit(startVal);
    } else if (evt.key === 'Escape' && startVal !== description) {
      // eslint-disable-next-line no-alert
      const answer = window.confirm('Are you sure you want to exit? All unsaved changes will be lost!');
      if (answer) {
        onEdit(description);
        editStartVal(description);
      }
    } else if (evt.key === 'Escape') {
      onEdit(description);
    }
  };

  const updateVisibility = () => {
    if ((done && filterState === 1) || (!done && filterState === 2)) isVisible.display = 'none';
    return isVisible;
  };
  function printTime(date) {
    const timing = formatDistanceToNow(date, { includeSeconds: true });
    return `Created ${timing} ago`;
  }

  if (editMode) {
    inputField = (
      <input type="text" autoFocus className="edit" value={startVal} onChange={catchInput} onKeyDown={updateTodo} />
    );
  }
  const computedLiClass = done ? 'completed' : editMode ? 'editing' : '';

  return (
    <li className={computedLiClass} style={updateVisibility()}>
      <div className="view">
        <input id={`task_${taskID}`} className="toggle" type="checkbox" checked={done} onChange={onDone} />
        <label htmlFor={`task_${taskID}`}>
          <span className="title">{description}</span>
          <span className="description">
            <Timer timer={timer} editTimer={(value) => editTimer(value)} />
          </span>
          <span className="description">{printTime(createdAt)}</span>
        </label>
        <button type="button" aria-label="Edit the task" className="icon icon-edit" onClick={turnOnEdit} />
        <button type="button" aria-label="Delete the task" className="icon icon-destroy" onClick={onDelete} />
      </div>
      {inputField}
    </li>
  );
};

Task.propTypes = {
  onDelete: PropTypes.func,
  turnOnEdit: PropTypes.func,
  onEdit: PropTypes.func,
  onDone: PropTypes.func,
  editTimer: PropTypes.func,
  taskObject: PropTypes.object,
  filterState: PropTypes.number,
};

Task.defaultProps = {
  onDelete: () => {},
  turnOnEdit: () => {},
  onEdit: () => {},
  onDone: () => {},
  editTimer: () => {},
  taskObject: {},
  filterState: 0,
};

export default Task;
