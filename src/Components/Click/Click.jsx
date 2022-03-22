import './Click.css';
import React from 'react';
import DropdownMenu from '../DropdownMenu';
import TargetArea from '../TargetArea';

const Click = (props) => {
  return (
    <div>
      <DropdownMenu
        mouseX={props.mouseX}
        mouseY={props.mouseY}
        mousePercentX={props.mousePercentX}
        mousePercentY={props.mousePercentY}
        characters={props.characters}
        setCharacters={props.setCharacters}
        setCorrect={props.setCorrect}
        setClicked={props.setClicked}
        checkIfGameOver={props.checkIfGameOver}
        setDropdownClicked={props.setDropdownClicked}
      />
      <TargetArea mouseX={props.mouseX} mouseY={props.mouseY} />
    </div>
  );
};

export default Click;
