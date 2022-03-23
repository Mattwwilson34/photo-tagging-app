import './CharacterKey.css';
import React, { useState } from 'react';
import Mario from '../../Images/Mario.png';
import Boo from '../../Images/Boo.png';
import Luigi from '../../Images/Luigi.png';
import Toad from '../../Images/Toad.png';
import Shiek from '../../Images/Shiek.png';

const CharacterKey = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <div className='CharacterKey'>
        <div className='CharacterKey-ImageWrapper'>
          <img src={Toad} alt='Toad'></img>
          <img src={Boo} alt='Boo'></img>
          <img src={Shiek} alt='Shiek'></img>
          <img src={Mario} alt='Mario'></img>
          <img src={Luigi} alt='Luigi'></img>
        </div>
        <button onClick={handleClick}>Hide</button>
      </div>
    );
  } else {
    return (
      <div className='CharacterKey'>
        <button onClick={handleClick}>Open Key</button>
      </div>
    );
  }
};

export default CharacterKey;
