import React from "react";
import '../../index.css';
import TasksFilter from '../tasks-filter';

export default function Footer(props) {
  const {toggleFilters, onClearInactive, counter} = props;

  return (
    <footer className="footer">
      <span className="todo-count">{`${counter} item${counter > 1 ? 's' : ''}`} left</span>
      <TasksFilter 
        toggleFilters={(num) => toggleFilters(num)}
      />
      <button className="clear-completed"
        onClick={() => onClearInactive()} >Clear completed</button>
    </footer>
  ) 
}
