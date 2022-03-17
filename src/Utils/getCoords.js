/**
 * Prints values of mouse position on page, width/height of webpage, and percentage coords
 * @param {object} event
 * @returns console.table function with object
 */
const getCoords = (event) => {
  return {
    percentX: Math.floor(
      (event.pageX / document.documentElement.scrollWidth) * 100
    ),
    percentY: Math.floor(
      (event.pageY / document.documentElement.scrollHeight) * 100
    ),
  };
};

export default getCoords;
