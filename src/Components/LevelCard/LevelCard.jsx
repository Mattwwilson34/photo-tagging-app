import './LevelCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LevelCard = (props) => {
  const { img } = props;

  return (
    <div className='LevelCard-Wrapper'>
      <div
        className='LevelCard'
        style={{
          backgroundImage: `url(${img})`,
        }}>
        <Link to='/game'></Link>
      </div>
      <div className='LevelCard-GameplayInfo'>
        <h2>How to play</h2>
        <ol>
          <li>Select a level card from above.</li>
          <li>This will bring you to the game start page.</li>
          <li>Click the "Start Game" button to begin the game.</li>
          <li>
            As quickly as you can, locate the levels special characters in the
            image.
          </li>
          <ul>
            <li>Clicking on the image places a circle around your cursor.</li>
            <li>
              Clicking on the image also displays a dropdown menu of characters
              you can choose from.
            </li>
          </ul>
          <li>
            Once all the characters are found the game is over and the timer
            stops.
          </li>
          <li>
            You can then entire your name if you would like to be displayed on
            the leaderboard.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LevelCard;
