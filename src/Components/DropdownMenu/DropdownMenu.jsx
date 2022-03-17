import './DropdownMenu.css';
import React from 'react';

const DropdownMenu = (props) => {
  const { mouseX, mouseY } = props;
  return (
    <div
      className='DropdownMenu'
      style={{
        left: `${mouseX + 50}px`,
        top: `${mouseY}px`,
      }}>
      <ul>
        <li>Toad</li>
        <li>Boo</li>
        <li>Shiek</li>
        <li>Mario</li>
        <li>Luigi</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
