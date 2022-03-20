import './GameStartOverlay.css';
import React from 'react';
import { setUser } from '../../Utils/setUser';

const GameStartOverlay = (props) => {
  const { setGameStarted, setTimerOn, setCurrentUser } = props;
  return (
    <div className='GameStartOverlay'>
      <div>
        <span>Click the button when you are ready.</span>
        <button
          onClick={() => {
            setCurrentUser(setUser());
            setGameStarted(true);
            setTimerOn(true);
          }}>
          Start the Game!
        </button>
      </div>
    </div>
  );
};

export default GameStartOverlay;
