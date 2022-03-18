import './MessageOverlay.css';
import React from 'react';

const MessageOverlay = (props) => {
  const { message, mouseX, mouseY } = props;

  return (
    <div
      className='MessageOverlay'
      style={{
        left: `${mouseX - 75}px`,
        top: `${mouseY - 125}px`,
      }}>
      {message}
    </div>
  );
};

export default MessageOverlay;
