import React from "react";
import PropTypes from "prop-types"
import NewTaskForm from "../new-task-form";
import '../../index.css';

const Header = ({ onCreate }) => {
  return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onCreate={(txt) => onCreate(txt)} />
      </header>
  );
};

Header.prototype = {
  onCreate: PropTypes.func.isRequired,
}

Header.defaultProps = {
  onCreate: () => {console.log("onCreate was not passed as props")}
}
  
export default Header;