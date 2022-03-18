import './Expire.css';
import React, { useState, useEffect } from 'react';

const Expire = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimer(props.delay);
  }, [props.delay]);

  const setTimer = (delay) => {
    setTimeout(() => setIsVisible(false), delay);
  };

  return isVisible ? <>{props.children}</> : <span />;
};

export default Expire;
