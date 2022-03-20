import './Game.css';
import React, { useState } from 'react';
import Gamecube from '../../Images/Gamecube.jpg';
import DropdownMenu from '../DropdownMenu';
import TargetArea from '../TargetArea';
import getCoords from '../../Utils/getCoords';
import Expire from '../Expire/Expire';
import MessageOverlay from '../MessageOverlay/MessageOverlay';
import GameStartOverlay from '../GameStartOverlay/GameStartOverlay';
import Timer from '../Timer/Timer';

const Game = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
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
  };

  const messageUserIfCorrect = () => {
    return (
      <Expire delay='750'>
        <MessageOverlay message='Correct!' mouseX={mouseX} mouseY={mouseY} />
      </Expire>
    );
  };

  const checkIfGameOver = () => {
    if (characters.length <= 1) {
      setTimerOn(false);
    }
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
          if (correct) {
            setCorrect(false);
          }
        }}></img>
      <Timer timerOn={timerOn} />
      {!gameStarted && (
        <GameStartOverlay
          setGameStarted={setGameStarted}
          setTimerOn={setTimerOn}
        />
      )}
      {correct && messageUserIfCorrect()}
      {clicked && characters.length > 0 && (
        <div>
          <DropdownMenu
            mouseX={mouseX}
            mouseY={mouseY}
            mousePercentX={mousePercentX}
            mousePercentY={mousePercentY}
            characters={characters}
            setCharacters={setCharacters}
            setCorrect={setCorrect}
            checkIfGameOver={checkIfGameOver}
          />
          <TargetArea mouseX={mouseX} mouseY={mouseY} />
        </div>
      )}
    </div>
  );
};

export default Game;
