import { Box, Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
// import Form from "Components/Contact/Form";
import { InlineWidget } from "react-calendly";

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
      <SectionHeading value1="Contact Us" center={false} />
      <InlineWidget url="https://calendly.com/williamferns/30-min-meeting?hide_gdpr_banner=1&hide_event_type_details=1" />
    </Container>
  );
};
export default Contact;
