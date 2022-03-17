import './Game.css';
import React, { useState } from 'react';
import Gamecube from '../../Images/Gamecube.jpg';
import DropdownMenu from '../DropdownMenu';
import TargetArea from '../TargetArea';
import printCoords from '../../Utils/printCoords';
import getCharacter from '../../Utils/getCharacter';

const Game = () => {
  const [clicked, setClicked] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  const toad = getCharacter('Toad');
  console.log(toad);

  return (
    <div className='Game-Container'>
      <img
        className='Game-Img'
        src={Gamecube}
        alt='Gamecube'
        onClick={(e) => {
          setClicked(!clicked);
          setMouseX(e.pageX);
          setMouseY(e.pageY);
          printCoords(e);
        }}></img>
      {clicked ? <DropdownMenu mouseX={mouseX} mouseY={mouseY} /> : ''}
      {clicked ? <TargetArea mouseX={mouseX} mouseY={mouseY} /> : ''}
    </div>
  );
};

export default Game;
