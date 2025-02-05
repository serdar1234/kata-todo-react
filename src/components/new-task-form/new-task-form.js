import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onCreate }) => {
  const [inputData, setInputData] = useState({
    title: '',
    minutes: 0,
    seconds: 0,
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (evt.key === 'Enter') {
      console.log('enter');
      onCreate(inputData);
    }
  };

  return (
    <form className="new-todo-form">
      <input className="new-todo" name="title" placeholder="What needs to be done?" onKeyDown={handleInputChange} />
      <input className="new-todo-form__timer" name="minutes" placeholder="Min" onKeyDown={handleInputChange} />
      <input className="new-todo-form__timer" name="seconds" placeholder="Sec" onKeyDown={handleInputChange} />
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
