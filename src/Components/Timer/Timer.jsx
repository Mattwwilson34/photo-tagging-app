import './Timer.css';
import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [time, setTime] = useState(0);
  const { timerOn } = props;

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='Timer'>
      <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
