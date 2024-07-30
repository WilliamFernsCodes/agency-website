import bountyHunters from "Data/Team/bountyHunters";
// {
//   title: "Quality Service",
//   name: "Particle",
//   star: 4,
//   review:
//     "They Provide great quality service and their behavior is so much helpful.",
//   avatar: Testimonial,
// },
const getTestimonials = async () => {
  let data;
  try {
    const response = await fetch("/api/getReplitData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bountyHunters),
    });
    data = await response.json();
  } catch (error) {
    console.error(`Error with getting Replit data: ${error}`);
    return [];
  }
  return data;
};
export default getTestimonials;
