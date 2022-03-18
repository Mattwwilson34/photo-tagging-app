import './MessageOverlay.css';
import React from 'react';

const MessageOverlay = (props) => {
  const { message } = props;

  return <div className='MessageOverlay'>{message}</div>;
};

export default MessageOverlay;
