import { Skeleton, Box } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Testimonials/Slider";

import { ListingsStats } from "Components/Skills";

//Styles
import styles from "Styles/Testimonials/Testimonials.styles";
import TestimonialsSkeleton from "Components/other/skeletons/TestimonialsSkeleton";

const Testimonials = () => {
  return (
    <Box component="section" sx={styles.Container} id="testimonials">
      <SectionHeading value1="Testimonials" border={true} />
      <Slider />
      <ListingsStats />
    </Box>
  );
};
export default Testimonials;
