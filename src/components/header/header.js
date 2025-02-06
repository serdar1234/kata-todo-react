import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../new-task-form';
import '../../index.css';

const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onCreate={onCreate} />
    </header>
  );
};

Header.propTypes = {
  onCreate: PropTypes.func,
};

Header.defaultProps = {
  onCreate: () => {},
};

export default Header;
