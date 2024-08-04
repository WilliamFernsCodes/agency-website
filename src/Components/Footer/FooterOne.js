import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Icons
import { MapIcon, EmailIcon, TwitterIcon } from "Utilis/Icons";
import GitHubIcon from "@mui/icons-material/GitHub";

//Logo
import Logo from "Assets/header/logo.svg";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  return (
    <Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <MapIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            46 Toon Van Den Heever St
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <EmailIcon />
        </Box>
        <Box>
          <Link href="mailto:business@williamferns.org">
            <a>
              <Typography variant="body1" component="p">
                business@williamferns.org
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Social}>
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
  );
};
export default FooterOne;
