import { Box, Grid, Stack, Typography, ButtonBase } from "@mui/material";

//Icons
import { ClendarIcon } from "Utils/Icons";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Data
import Blogs from "Data/Blog/Blogs.data";

//Styles
import styles from "Styles/Blog/SingleBlog.styles";

const SingleBlog = () => {
  return (
    <Box sx={{ mt: "4rem", mb: "5.5em" }}>
      <Grid container spacing={4}>
        {Blogs &&
          Blogs.map((blog, i) => (
            <Grid item md={4} lsm={6} xxs={12} key={i}>
              <Box sx={styles.BoxContainer}>
                <Box
                  component="img"
                  src={blog.image}
                  alt={blog.title}
                  sx={styles.Image}
                />
                <Box sx={styles.Content}>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={styles.Category}
                  >
                    {blog.category}
                  </Typography>
                  <Typography variant="h6" component="h6" sx={styles.Title}>
                    {blog.title}
                  </Typography>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Box sx={styles.TimeIcon}>
                      <ClendarIcon />
                    </Box>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={styles.TimeText}
                    >
                      {blog.time}
                    </Typography>
                  </Stack>
                  <ButtonBase sx={styles.Button}>
                    Read More
                    <ArrowForwardTwoToneIcon />
                  </ButtonBase>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default SingleBlog;
