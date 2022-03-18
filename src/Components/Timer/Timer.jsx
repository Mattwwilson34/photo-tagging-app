import './Timer.css';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return clearTimeout(setTimeout);
  }, [time]);

  return <div className='Timer'>{time}</div>;
};

export default Timer;
