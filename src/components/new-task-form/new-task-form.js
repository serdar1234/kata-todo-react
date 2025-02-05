import React from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onCreate }) => {
  const handleEnter = (evt) => {
    if (evt.target.value && evt.key === 'Enter') {
      onCreate(evt.target.value);
      evt.target.value = '';
    }
  };
  return (
    <form className="new-todo-form">
      <input className="new-todo" placeholder="What needs to be done?" onKeyDown={handleEnter} />
      <input className="new-todo-form__timer" placeholder="Min" />
      <input className="new-todo-form__timer" placeholder="Sec" />
    </form>
  );
};

NewTaskForm.propTypes = {
  onCreate: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onCreate: () => {},
};

export default NewTaskForm;
