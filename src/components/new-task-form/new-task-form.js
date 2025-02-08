import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onCreate }) => {
  const [inputData, setInputData] = useState({
    title: '',
    minutes: '',
    seconds: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, minutes, seconds } = inputData;
    if (
      title.length &&
      Number.isInteger(Math.abs(parseInt(+minutes, 10))) &&
      Number.isInteger(Math.abs(parseInt(+seconds, 10)))
    ) {
      onCreate(inputData);
      setInputData({
        title: '',
        minutes: '',
        seconds: '',
      });
    }
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input
        className="new-todo"
        name="title"
        type="text"
        placeholder="What needs to be done?"
        value={inputData.title}
        onChange={handleInputChange}
      />
      <input
        className="new-todo-form__timer"
        name="minutes"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        placeholder="Min"
        value={inputData.minutes}
        onChange={handleInputChange}
      />
      <input
        className="new-todo-form__timer"
        name="seconds"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        placeholder="Sec"
        value={inputData.seconds}
        onChange={handleInputChange}
      />
      {/* Hidden Submit button */}
      <input type="submit" style={{ display: 'none' }} />
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
