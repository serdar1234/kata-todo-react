import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const displayTime = (t) => {
  let s = t % 60;
  let m = Math.floor(t / 60);
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;
  return `${m}:${s}`;
};

const Timer = ({ timer, editTimer }) => {
  const [timeLeft, setTimeLeft] = useState(timer);
  const [isPaused, setIsPaused] = useState(true);
  const [start, setStart] = useState(null);
  useEffect(() => {
    let timerId;
    if (!isPaused && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearTimeout(timerId);
            editTimer(0);
            return 0;
          }
          return Math.floor(timer - (Date.now() - start) / 1000);
        });
      }, 1000);
    } else if (timer <= 0) {
      setTimeLeft(0);
    }

    return () => clearTimeout(timerId);
  }, [isPaused, timeLeft, editTimer, start, timer]);

  const turnOnTimer = () => {
    if (start === null && isPaused) {
      setStart(Date.now());
    } else if (start !== null && isPaused) {
      setTimeLeft(timer);
      setStart(Date.now());
    }

    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    editTimer(timeLeft);
  };

  return (
    <>
      <button type="button" aria-label="Start the task" className="icon icon-play" onClick={turnOnTimer} />
      <button type="button" aria-label="Pause the task" className="icon icon-pause" onClick={pauseTimer} />
      <span>{displayTime(timeLeft)}</span>
    </>
  );
};

Timer.propTypes = {
  timer: PropTypes.number,
  editTimer: PropTypes.func,
};

Timer.defaultProps = {
  timer: 0,
  editTimer: () => {},
};

export default Timer;
