import './Game.css';
import React, { useState } from 'react';
import Gamecube from '../../Images/Gamecube.jpg';
import DropdownMenu from '../DropdownMenu';
import TargetArea from '../TargetArea';
import printCoords from '../../Utils/printCoords';
import getCoords from '../../Utils/getCoords';
import Expire from '../Expire/Expire';
import MessageOverlay from '../MessageOverlay/MessageOverlay';

const Game = () => {
  const [correct, setCorrect] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [mousePercentX, setMousePercentX] = useState(null);
  const [mousePercentY, setMousePercentY] = useState(null);
  const [characters, setCharacters] = useState([
    'Toad',
    'Boo',
    'Shiek',
    'Mario',
    'Luigi',
  ]);

  const setMousePositions = (e) => {
    const { percentX, percentY } = getCoords(e);
    setMousePercentX(percentX);
    setMousePercentY(percentY);
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    console.log('mouse positions set');
  };

  const messageUserIfCorrect = () => {
    return (
      <Expire delay='2000'>
        <MessageOverlay message='Correct!' />
      </Expire>
    );
  };

  return (
    <div className='Game-Container'>
      <img
        className='Game-Img'
        src={Gamecube}
        alt='Gamecube'
        onClick={(e) => {
          setClicked(!clicked);
          setMousePositions(e);
          printCoords(e);
        }}></img>
      {correct && messageUserIfCorrect()}
      {clicked && (
        <DropdownMenu
          mouseX={mouseX}
          mouseY={mouseY}
          mousePercentX={mousePercentX}
          mousePercentY={mousePercentY}
          characters={characters}
          setCharacters={setCharacters}
          setCorrect={setCorrect}
        />
      )}
      {clicked && <TargetArea mouseX={mouseX} mouseY={mouseY} />}
    </div>
  );
};

export default Game;
