import { createClient } from "@supabase/supabase-js";

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
  return shuffledColors;
}

const randomItem = (itemsArray) => {
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[randomIndex];
};

const createSupabase = (key) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_BASE_URL;
  const supabase = createClient(supabaseUrl, key);

  return supabase;
};

export {
  shortenText,
  capitalizeFirstLetter,
  getTagsBackgroundColors,
  createSupabase,
  randomItem,
};
