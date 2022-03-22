import './MessageOverlay.css';
import React, { useState, useEffect } from 'react';

const MessageOverlay = (props) => {
  const { message, mouseX, mouseY, setDropdownClicked, setCorrect } = props;
  const [visible, setVisible] = useState(true);

  const correct = {
    left: `${mouseX - 75}px`,
    top: `${mouseY - 125}px`,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setDropdownClicked(false);
      setCorrect(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [visible, setDropdownClicked, setCorrect]);

  if (visible) {
    return (
      <div
        className={`MessageOverlay ${
          message === 'Correct' ? 'correct' : 'incorrect'
        }`}
        style={correct}>
        {message}
      </div>
    );
  } else {
    return null;
  }
};

export default MessageOverlay;
