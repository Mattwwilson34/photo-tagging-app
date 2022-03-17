import './TargetArea.css';
import React from 'react';

const TargetArea = (props) => {
  const { mouseX, mouseY } = props;
  return (
    <div
      className='TargetArea'
      style={{
        left: `${mouseX - 50}px`,
        top: `${mouseY - 50}px`,
      }}></div>
  );
};

export default TargetArea;
