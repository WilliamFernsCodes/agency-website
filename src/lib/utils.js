const shortenText = (input, maxLength) => {
  if (input.length > maxLength) {
    const newVar = input.slice(0, maxLength) + " " + "...";
    return newVar.replace("....", "...");
  } else {
    return input;
  }
};

function capitalizeFirstLetter(string) {
  if (!string) return string; // Handle empty strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTagsBackgroundColors() {
  const allColors = ["#800080", "#A52A2A", "#264DE4", "#008000"];
  // shuffle all colors in a random order
  const shuffledColors = allColors.sort(() => Math.random() - 0.5);
  console.log(`Shuffled Colors: ${shuffledColors}`);
  return shuffledColors;
}

export { shortenText, capitalizeFirstLetter, getTagsBackgroundColors };
