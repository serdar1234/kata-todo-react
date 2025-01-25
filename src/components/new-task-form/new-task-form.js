import React from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onCreate }) => {
  const handleEnter = (evt) => {
    if (evt.target.value && evt.key === 'Enter') {
      onCreate(evt.target.value);
      evt.target.value = '';
    }
  };
  return <input className="new-todo" placeholder="What needs to be done?" onKeyDown={handleEnter} />;
};

NewTaskForm.propTypes = {
  onCreate: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onCreate: () => {},
};

export default NewTaskForm;
