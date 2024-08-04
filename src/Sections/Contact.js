import { Box, Container, ContainerProps } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import { InlineWidget } from "react-calendly";

import { BookNowButton } from "Components/other/buttons/index.js";

//Styles
import styles from "Styles/Contact/Contact.styles";

const Contact = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={styles.Container}
      id="contact"
    >
      <Box id="contact-heading">
        <SectionHeading value1="Contact Us" center={false} />
      </Box>
      <Box id="book-btn-container">
        <BookNowButton display={{ xxs: "flex", sm: "none" }} />
      </Box>
      <InlineWidget url="https://calendly.com/williamferns/30-min-meeting?hide_gdpr_banner=1&hide_event_type_details=1" />
    </Container>
  );
};
export default Contact;
