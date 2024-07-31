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

export {
  shortenText,
  capitalizeFirstLetter,
};
