import { Fade, Box, Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utils/SectionHeading";

//Component
import { InlineWidget } from "react-calendly";

import { BookNowButton } from "Components/other/buttons/index.js";

//Styles
import styles from "Styles/Contact/Contact.styles";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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
      <Box
        ref={ref}
        className={inView ? "slide-in-left" : ""}
        id="book-btn-container"
      >
        <BookNowButton display={{ xxs: "flex", sm: "none" }} />
      </Box>
      <Fade in={inView} timeout={2000}>
        <Box
          ref={ref}
          id="inline-widget-container"
          className={inView ? "slide-in-bottom" : ""}
        >
          <InlineWidget url="https://calendly.com/williamferns/30-min-meeting?hide_gdpr_banner=1&hide_event_type_details=1" />
        </Box>
      </Fade>
    </Container>
  );
};
export default Contact;
