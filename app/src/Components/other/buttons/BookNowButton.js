import { ButtonBase } from "@mui/material";

//Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

const BookNowButton = ({ display = { xxs: "none", sm: "flex" } }) => {
  const buttonStyles = {
    backgroundColor: "primary.main",
    color: "background.default",
    p: "12px 18px",
    fontSize: "15px",
    lineHeight: 1,
    verticalAlign: "center",
    fontWeight: 500,
    border: "1px solid transparent",
    transition: "0.3s ease",
    svg: {
      fontSize: "18px",
      ml: "8px",
      mb: "-1px",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "text.primary",
      borderColor: "text.primary",
    },
    alignItems: "center",
    display,
  };

  return (
    <a
      href="https://calendly.com/automa-ai-software/30-min-meeting"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <ButtonBase sx={buttonStyles}>
        Book Now
        <ArrowForwardTwoToneIcon />
      </ButtonBase>
    </a>
  );
};

export default BookNowButton;
