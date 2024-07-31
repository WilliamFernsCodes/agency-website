import { useState, useEffect, useCallback } from "react";
import {
  Link,
  Box,
  ButtonBase,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";

import { capitalizeFirstLetter, shortenText } from "lib/utils";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import useEmblaCarousel from "embla-carousel-react";

//Icons
import { ChevronLeft, ChevronRight } from "Utilis/Icons";

//Data
import getTestimonials from "Data/Testimonials/Testimonials.data";

//Styles
import styles from "Styles/Testimonials/Slider.styles";

const Sliders = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    const setTestimonialsData = async () => {
      const testimonialsData = await getTestimonials();
      const allTestimonials = testimonialsData
        .map((user) => user.userBounties)
        .flat();
      setTestimonials(allTestimonials);
    };
    setTestimonialsData();
  }, []);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  // Reinitialize Embla when testimonials are updated
  useEffect(() => {
    if (embla) {
      embla.reInit();
    }
  }, [embla, testimonials]);
  return (
    <Box sx={{ mt: "2em" }}>
      <Box className="embla" sx={styles.Embla}>
        <Box className="embla__viewport" ref={viewportRef}>
          <Box className="embla__container" sx={styles.EmblaContainer}>
            {testimonials &&
              testimonials.map((testimonial, i) => {
                const review = shortenText(testimonial.review, 150);
                const title = shortenText(testimonial.title, 50);
                const name = testimonial.name;
                const backgroundColor = "0D8ABC";
                const textColor = "fff";
                const avatarURL = testimonial.avatarURL.endsWith(
                  "?d=blank&s=256",
                )
                  ? `https://ui-avatars.com/api/?name=${capitalizeFirstLetter(name.slice(0, 3))}+${capitalizeFirstLetter(name.slice(1, 3))}&background=${backgroundColor}&color=${textColor}`
                  : testimonial.avatarURL;
                console.log(`Avatar URL: ${avatarURL}`);

                return (
                  <Box className="embla__slide" sx={styles.EmblaSlide} key={i}>
                    <Rating
                      name="half-rating-read"
                      size="large"
                      defaultValue={Number(testimonial.star)}
                      precision={0.5}
                      readOnly
                    />
                    <Box sx={styles.QuoteContainer}>
                      <Typography
                        variant="body1"
                        component="p"
                        // sx={styles.Description}
                      >
                        {review}
                      </Typography>
                    </Box>
                    <Avatar alt={name} src={avatarURL} sx={styles.Avatar} />
                    <Box sx={{ mt: "4.5em" }}>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={styles.Title}
                      >
                        {title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography>{`@${name}`}</Typography>
                        <Typography>{`${testimonial.amount}$`}</Typography>
                      </Box>
                      {"link" in testimonial && (
                        <Link
                          href={testimonial.link}
                          target="_blank"
                          sx={{
                            color: "blue",
                            textDecoration: "none",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            // make it italic
                            fontStyle: "italic",
                          }}
                        >
                          View Listing
                        </Link>
                      )}
                    </Box>
                    {/* <ButtonBase sx={styles.Name}>{testimonial.name}</ButtonBase> */}
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box sx={styles.Navigation}>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Box>
      </Box>
    </Box>
  );
};
export default Sliders;

//Prev Button
const PrevButton = ({ enabled, onClick }) => (
  <ButtonBase
    className={!enabled ? "disable" : ""}
    onClick={onClick}
    disabled={!enabled}
  >
    <ChevronLeft />
  </ButtonBase>
);
//Next Button
const NextButton = ({ enabled, onClick }) => (
  <ButtonBase
    className={!enabled ? "disable" : ""}
    onClick={onClick}
    disabled={!enabled}
  >
    <ChevronRight />
  </ButtonBase>
);
