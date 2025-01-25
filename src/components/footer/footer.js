import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css';
import TasksFilter from '../tasks-filter';

const Footer = (props) => {
  const { toggleFilters, onClearInactive, counter = 0 } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{`${counter} item${counter > 1 ? 's' : ''}`} left</span>
      <TasksFilter toggleFilters={(num) => toggleFilters(num)} />
      <button type="button" className="clear-completed" onClick={() => onClearInactive()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  toggleFilters: PropTypes.func,
  onClearInactive: PropTypes.func,
  counter: PropTypes.number,
};

Footer.defaultProps = {
  counter: 0,
  toggleFilters: () => {},
  onClearInactive: () => {},
};

export default Footer;
