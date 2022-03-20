import './Expire.css';
import React, { useState, useEffect } from 'react';

const Expire = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let interval = null;

    interval = setTimeout(() => {
      setIsVisible(false);
    }, props.delay);

    return () => clearInterval(interval);
  }, [props.delay]);

  return isVisible ? <>{props.children}</> : <span />;
};

export default Expire;
