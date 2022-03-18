import './GameStartOverlay.css';
import React from 'react';

const GameStartOverlay = (props) => {
  const { setGameStarted } = props;
  return (
    <div className='GameStartOverlay'>
      <div>
        <span>Click the button when you are ready.</span>
        <button onClick={() => setGameStarted(true)}>Start the Game!</button>
      </div>
    </div>
  );
};

export default GameStartOverlay;
