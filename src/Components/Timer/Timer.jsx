import './Timer.css';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [timeOn]);

  return (
    <div className='Timer'>
      {time}
      <div>
        <button onClick={setTimeOn(true)}>On</button>
        <button onClick={setTimeOn(false)}>Off</button>
        <button onClick={setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
