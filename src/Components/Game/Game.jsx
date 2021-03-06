import './Game.css';
import React, { useState } from 'react';
import Gamecube from '../../Images/Gamecube.jpg';
import Click from '../Click/Click';
import getCoords from '../../Utils/getCoords';
import MessageOverlay from '../MessageOverlay/MessageOverlay';
import GameStartOverlay from '../GameStartOverlay/GameStartOverlay';
import { setUserEndTime, setUserTimeToComplete } from '../../Utils/setUser';
import GameOver from '../GameOver/GameOver';
import CharacterKey from '../CharacterKey/CharacterKey';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
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
  };

  const setMousePositions = (e) => {
    const { percentX, percentY } = getCoords(e);
    setMousePercentX(percentX);
    setMousePercentY(percentY);
    setMouseX(e.pageX);
    setMouseY(e.pageY);
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
      <CharacterKey />
      {/* Check if game over */}
      {gameOver && <GameOver currentUserID={currentUserID} />}
      {/* If game has not started display GameStartOverlay*/}
      {!gameStarted && (
        <GameStartOverlay
          setGameStarted={setGameStarted}
          setCurrentUserID={setCurrentUserID}
        />
      )}
      {/* If user guessed correctly message user */}
      {dropdownClicked && (
        <MessageOverlay
          mouseX={mouseX}
          mouseY={mouseY}
          message={correct ? 'Correct' : 'Incorrect'}
          setDropdownClicked={setDropdownClicked}
          setCorrect={setCorrect}
        />
      )}
      {/* Display Dropdown/TargetArea if click = true and there are still characters to find */}
      {clicked && (
        <Click
          setCorrect={setCorrect}
          setClicked={setClicked}
          mouseX={mouseX}
          mouseY={mouseY}
          mousePercentX={mousePercentX}
          mousePercentY={mousePercentY}
          characters={characters}
          setCharacters={setCharacters}
          checkIfGameOver={checkIfGameOver}
          setDropdownClicked={setDropdownClicked}></Click>
      )}
    </div>
  );
};

export default Game;
