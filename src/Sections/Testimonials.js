import { Box, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Testimonials/Slider";

//Styles
import styles from "Styles/Testimonials/Testimonials.styles";

const Testimonials = () => {
  return (
    <Box component="section" sx={styles.Container} id="testimonials">
      <SectionHeading value1="Testimonials" border={true} center={false} />
      <Slider />
    </Box>
  );
};
export default Testimonials;
