import { ButtonBase, Stack } from "@mui/material";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

//Icons
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialIconButtons() {
  const styles = {
    a: {
      color: "primary.social_color",
      textDecoration: "none",
      button: {
        backgroundColor: "primary.social_bg",
        m: "0 5px",
        p: "14px",
        borderRadius: "8px",
        transition: "all 0.3s linear 0s",
        svg: {
          fontSize: "16px",
          transition: "0.3s",
        },
        "&:hover": {
          backgroundColor: "primary.main",
          svg: {
            color: "background.default",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  };
  return (
    <Stack direction="row" sx={styles}>
      <Link href="mailto:business@williamferns.org">
        <a target="_blank">
          <ButtonBase>
            <EmailIcon />
          </ButtonBase>
        </a>
      </Link>
      <Link href="https://github.com/WilliamFernsCodes/">
        <a target="_blank">
          <ButtonBase>
            <GitHubIcon />
          </ButtonBase>
        </a>
      </Link>
      <Link href="https://twitter.com/willfernsdev">
        <a target="_blank">
          <ButtonBase>
            <TwitterIcon />
          </ButtonBase>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/william-ferns-12670a2b6/">
        <a target="_blank">
          <ButtonBase>
            <LinkedInIcon />
          </ButtonBase>
        </a>
      </Link>
    </Stack>
  );
}
