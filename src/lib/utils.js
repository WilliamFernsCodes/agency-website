const shortenText = (input, maxLength) => {
  if (input.length > maxLength) {
    const newVar = input.slice(0, maxLength) + " " + "...";
    return newVar.replace("....", "...");
  } else {
    return input;
  }
};

export { shortenText };
