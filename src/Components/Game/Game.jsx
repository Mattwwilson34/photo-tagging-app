import './Game.css';
import React from 'react';
import Gamecube from '../../Images/Gamecube.jpg';

const Game = () => {
  return (
    <div className='Game-Container'>
      <img className='Game-Img' src={Gamecube} alt='Gamecube'></img>
    </div>
  );
};

export default Game;
