import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onCreate }) => {
  const [inputData, setInputData] = useState({
    title: '',
    minutes: 0,
    seconds: 0,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onCreate(inputData);
  };

  const handleInputChange = (evt) => {
    if (evt.key === 'Enter') console.log('enter');
    const { name, value } = evt.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input className="new-todo" name="title" placeholder="What needs to be done?" onChange={handleInputChange} />
      <input className="new-todo-form__timer" name="minutes" placeholder="Min" onChange={handleInputChange} />
      <input className="new-todo-form__timer" name="seconds" placeholder="Sec" onChange={handleInputChange} />
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
