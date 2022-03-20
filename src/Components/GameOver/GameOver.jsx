import './GameOver.css';
import React from 'react';

const GameOver = () => {
  return (
    <div className='GameOver'>
      <div>
        <p>You found all the Characters!</p>
        <p>Enter your name below to link it to your score</p>
        <input type='text' classname='GameOver-UserInput'></input>
        <span className='GameOver-Disclaimer'>
          If you do not specify a name your score will be listed under Anonymous
        </span>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default GameOver;
