import './GameOver.css';
import React from 'react';
import { updateUsername } from '../../Utils/setUser';

const GameOver = (props) => {
  const { currentUserID } = props;

  const handleSubmit = (e) => {
    const submitButton = e.target;
    const username = submitButton.parentElement.children[2].value;

    // leaves username anonymous if input blank or updates to provided input text
    if (username.length === 0) {
      disableButton(submitButton);
      return;
    } else {
      updateUsername(currentUserID, username);
    }

    // disable button to prevent addional PUT requests
    disableButton(submitButton);
  };

  const disableButton = (button) => {
    button.disabled = true;
    button.style.cursor = 'not-allowed';
  };

  return (
    <div className='GameOver'>
      <div>
        <p>You found all the Characters!</p>
        <p>Enter your name below to link it to your score</p>
        <input type='text'></input>
        <span className='GameOver-Disclaimer'>
          If you do not specify a name your score will be listed under Anonymous
        </span>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GameOver;
