import './Game.css';
import React, { useState } from 'react';
import Gamecube from '../../Images/Gamecube.jpg';
import Click from '../Click/Click';
import getCoords from '../../Utils/getCoords';
import Expire from '../Expire/Expire';
import MessageOverlay from '../MessageOverlay/MessageOverlay';
import GameStartOverlay from '../GameStartOverlay/GameStartOverlay';
import { setUserEndTime, setUserTimeToComplete } from '../../Utils/setUser';
import GameOver from '../GameOver/GameOver';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [gameOver, setGameOver] = useState(false);
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

  const handleImgClick = (e) => {
    setClicked(!clicked);
    setMousePositions(e);
    if (correct) {
      setCorrect(false);
    }
  };

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

  const checkIfGameOver = async () => {
    if (characters.length <= 1) {
      await setUserEndTime(currentUserID);
      await setUserTimeToComplete(currentUserID);
      setGameOver(true);
    }
  };

  return (
    <div className='Game-Container'>
      <img
        className='Game-Img'
        src={Gamecube}
        alt='Gamecube'
        onClick={handleImgClick}></img>
      {gameOver && <GameOver />}
      {!gameStarted && (
        <GameStartOverlay
          setGameStarted={setGameStarted}
          setCurrentUserID={setCurrentUserID}
        />
      )}
      {correct && messageUserIfCorrect()}
      {clicked && characters.length > 0 && (
        <Click
          setCorrect={setCorrect}
          mouseX={mouseX}
          mouseY={mouseY}
          mousePercentX={mousePercentX}
          mousePercentY={mousePercentY}
          characters={characters}
          setCharacters={setCharacters}
          checkIfGameOver={checkIfGameOver}></Click>
      )}
    </div>
  );
};

export default Game;
