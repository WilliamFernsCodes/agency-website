import Testimonial from "Assets/testimonials/client-1.png";
import bountyHunters from "Data/Team/bountyHunters";

import { getReplitData } from "Data/FetchData";
// {
//   title: "Quality Service",
//   name: "Particle",
//   star: 4,
//   review:
//     "They Provide great quality service and their behavior is so much helpful.",
//   avatar: Testimonial,
// },
const getTestimonials = async () => {
  const testimonials = await getReplitData(bountyHunters);
};
export default getTestimonials;
