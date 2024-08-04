import { Box, ButtonBase, Typography, Stack, Divider } from "@mui/material";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

//Icons
import GitHubIcon from "@mui/icons-material/GitHub";

//Styles
import styles from "Styles/Footer/Footer.styles";

const BottomFooter = () => {
  return (
    <Box>
      <Divider sx={styles.Divider} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xxs: "column", md: "row" },
          padding: "1.5em",
          gap: "15px",
        }}
      >
        <Typography variant="body1" component="p" sx={styles.Copyright}>
          © {new Date().getFullYear()} Automa Software Agency. All Rights
          Reserved.
        </Typography>
        <Stack direction="row" sx={styles.Social}>
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
      </Box>
    </Box>
  );
};
export default BottomFooter;
