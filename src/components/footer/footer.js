import React from "react";
import PropTypes from "prop-types"
import "../../index.css";
import TasksFilter from "../tasks-filter";

Footer.propTypes = {
  toggleFilters: PropTypes.func.isRequired,
  onClearInactive: PropTypes.func.isRequired,
  counter: PropTypes.number
}

Footer.defaultProps = {
  counter: 0,
  toggleFilters: () => {console.log("toggleFilters were not passed as props")},
  onClearInactive: () => {console.log("onClearInactive was not passed as props")}
}

export default function Footer(props) {
  const {toggleFilters, onClearInactive, counter=0} = props;

  return (
    <footer className="footer">
      <span className="todo-count">{`${counter} item${counter > 1 ? "s" : ""}`} left</span>
      <TasksFilter 
        toggleFilters={(num) => toggleFilters(num)}
      />
      <button className="clear-completed"
        onClick={() => onClearInactive()} >Clear completed</button>
    </footer>
  ) 
}