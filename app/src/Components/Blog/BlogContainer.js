import {
  useMediaQuery,
  useTheme,
  Fade,
  Box,
  Stack,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
//Icons
import { ClendarIcon } from "Utils/Icons";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import { randomItem } from "lib/utils";
import { useState, useEffect } from "react";

import { getBlogs } from "lib/supabase";
//Styles
import styles from "Styles/Blog/BlogContainer.styles";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const allBlogs = await getBlogs();
      setBlogs(allBlogs);
    };
    getAllBlogs();
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={styles.BlogsContainer}>
      {blogs &&
        blogs.map((blog, i) => (
          <BlogItem key={i} blog={blog} isMobile={isMobile} />
        ))}
    </Box>
  );
};

const BlogItem = ({ blog, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const randomClass = randomItem(["slide-in-right", "slide-in-left"]);
  return (
    <Fade in={inView} timeout={2000}>
      <Box
        ref={ref}
        sx={styles.BoxContainer}
        className={
          inView && isMobile
            ? randomClass
            : inView && !isMobile
              ? "slide-in-bottom"
              : ""
        }
      >
        <Box
          component="img"
          src={blog.image}
          alt={blog.title}
          sx={styles.Image}
        />
        <Box sx={styles.Content}>
          <Typography variant="body1" component="p" sx={styles.Category}>
            {blog.category}
          </Typography>
          <Typography variant="h6" component="h6" sx={styles.Title}>
            {blog.title}
          </Typography>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box sx={styles.TimeIcon}>
              <ClendarIcon />
            </Box>
            <Typography variant="body1" component="p" sx={styles.TimeText}>
              {blog.time}
            </Typography>
          </Stack>
          <ButtonBase sx={styles.Button}>
            Read More
            <ArrowForwardTwoToneIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Fade>
  );
};

export default BlogContainer;
