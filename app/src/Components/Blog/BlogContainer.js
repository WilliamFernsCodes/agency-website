import {
  useMediaQuery,
  useTheme,
  Fade,
  Box,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
//Icons
import { CalendarIcon } from "Utils/Icons";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import Link from "next/link";
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Box sx={styles.BlogsContainer}>
      {blogs &&
        blogs.map((blog, i) => (
          <BlogItem key={i} blog={blog} isMobile={isMobile} />
        ))}

      <Fade in={inView} timeout={2000}>
        <Link
          ref={ref}
          className={inView ? "slide-in-bottom" : ""}
          href="https://medium.com/@business_76456"
        >
          <a
            target="_blank"
            // ref={ref}
            // className={inView ? "slide-in-bottom" : ""}
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ButtonBase sx={styles.Button}>
              See More Blogs
              <ArrowForwardTwoToneIcon />
            </ButtonBase>
          </a>
        </Link>
      </Fade>
    </Box>
  );
};

const BlogItem = ({ blog, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const randomClass = randomItem(["slide-in-right", "slide-in-left"]);
  const postingDate = blog.posting_date;
  // the posting date format is like this as a string: "2024-08-07"
  const date = new Date(postingDate);
  // conver the date to "7 August, 2024"
  const formattedDate = date.toLocaleString("en-US", { dateStyle: "medium" });
  console.log(`Blog: ${JSON.stringify(blog, null, 2)}`);
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
          src={blog.image_url}
          alt={blog.blog_title}
          sx={styles.Image}
        />
        <Box sx={styles.Content}>
          <Box sx={styles.TopContent}>
            <Typography variant="h6" component="h6" sx={styles.Title}>
              {blog.blog_title}
            </Typography>
            <Box sx={styles.TimeContainer}>
              <Box sx={styles.TimeIcon}>
                <CalendarIcon />
              </Box>
              <Typography variant="body1" component="p" sx={styles.TimeText}>
                {formattedDate}
              </Typography>
            </Box>
          </Box>
          <Link href={blog.blog_link}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ButtonBase sx={styles.Button}>
                Read More
                <ArrowForwardTwoToneIcon />
              </ButtonBase>
            </a>
          </Link>
        </Box>
      </Box>
    </Fade>
  );
};

export default BlogContainer;
