import './DropdownMenu.css';
import React from 'react';
import getCharacter from '../../Utils/getCharacter';

const DropdownMenu = (props) => {
  const { mouseX, mouseY } = props;

  const handleClick = async (e) => {
    const characterName = e.target.textContent;
    const character = await getCharacter(characterName);
    console.log(character);
  };

  return (
    <div
      className='DropdownMenu'
      style={{
        left: `${mouseX + 50}px`,
        top: `${mouseY}px`,
      }}>
      <ul>
        <li onClick={handleClick}>Toad</li>
        <li onClick={handleClick}>Boo</li>
        <li onClick={handleClick}>Shiek</li>
        <li onClick={handleClick}>Mario</li>
        <li onClick={handleClick}>Luigi</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
