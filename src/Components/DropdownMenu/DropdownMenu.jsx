import './DropdownMenu.css';
import React from 'react';

const DropdownMenu = (props) => {
  const { mouseX, mouseY } = props;
  return (
    <div
      className='DropdownMenu'
      style={{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      }}>
      <ul>
        <li>Mario</li>
        <li>Mario</li>
        <li>Mario</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
