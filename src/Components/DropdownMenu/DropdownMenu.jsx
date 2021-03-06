import './DropdownMenu.css';
import getCharacter from '../../Utils/getCharacter';
import between from '../../Utils/between';

const DropdownMenu = (props) => {
  const {
    mouseX,
    mouseY,
    mousePercentX,
    mousePercentY,
    characters,
    setCharacters,
    setCorrect,
    setClicked,
    checkIfGameOver,
    setDropdownClicked,
  } = props;

  const handleClick = async (e) => {
    const { characterPercentX, characterPercentY } = await getCharacterCoords(
      e
    );
    setDropdownClicked(true);
    const characterFound = checkIfCoordsMatch(
      characterPercentX,
      characterPercentY
    );
    if (characterFound) {
      removeCharacterFromDropdown(e);
      setCorrect(true);
      setClicked(false);
      checkIfGameOver();
    }
  };

  // gets character coordinates from databse
  const getCharacterCoords = async (e) => {
    const characterName = e.target.textContent;
    const { percentX: characterPercentX, percentY: characterPercentY } =
      await getCharacter(characterName);
    return { characterPercentX, characterPercentY };
  };

  // Checks if mouse coordinates are within 1 above/below DB character coordinates
  const checkIfCoordsMatch = (characterPercentX, characterPercentY) => {
    if (
      between(mousePercentX, characterPercentX - 1, characterPercentX + 1) &&
      between(mousePercentY, characterPercentY - 1, characterPercentY + 1)
    ) {
      return true;
    } else return false;
  };

  const removeCharacterFromDropdown = (e) => {
    const characterClone = characters.filter(
      (character) => character !== e.target.textContent
    );
    setCharacters(characterClone);
  };

  return (
    <div
      className='DropdownMenu'
      style={{
        left: `${mouseX + 50}px`,
        top: `${mouseY}px`,
      }}>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character} onClick={handleClick}>
              {character}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
