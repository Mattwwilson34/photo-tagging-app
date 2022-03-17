/**
 * Prints values of mouse position on page, width/height of webpage, and percentage coords
 * @param {object} event
 * @returns object
 */
const printCoords = (event) => {
  return console.log({
    pageX: event.pageX,
    pageY: event.pageY,
    pageWidth: document.documentElement.scrollWidth,
    pageHeight: document.documentElement.scrollHeight,
    percentX: Math.floor(
      (event.pageX / document.documentElement.scrollWidth) * 100
    ),
    percentY: Math.floor(
      (event.pageY / document.documentElement.scrollHeight) * 100
    ),
  });
};

export default printCoords;
