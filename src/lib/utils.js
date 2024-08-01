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

function getRandomColor() {
  const randomColors = ["#000", "#800080", "#A52A2A", "#264DE4", "#008000"];
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
}

export { shortenText, capitalizeFirstLetter, getRandomColor };
