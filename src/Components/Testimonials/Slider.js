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
import getTestimonialsData from "Data/Testimonials/Testimonials.data";

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
      const testimonialsData = await getTestimonialsData();
      const allTestimonials = testimonialsData
        .map((user) => user.userBounties)
        .flat();
      setTestimonials(allTestimonials.sort((a, b) => b.amount - a.amount));
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
                const review = shortenText(testimonial.review, 70);
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
                      <Typography variant="body1" component="p">
                        {review}
                      </Typography>
                    </Box>
                    <Box sx={styles.PosterContainer}>
                      <Box sx={styles.PosterInfo}>
                        <Typography className="poster-name" component="p">
                          {name}
                        </Typography>
                        <Typography
                          component="p"
                          className="listing-information"
                        >
                          {`${testimonial.amount}$, '${title}'`}
                        </Typography>
                      </Box>
                      <Box sx={styles.AvatarContainer}>
                        <Avatar alt={name} src={avatarURL} className="avatar" />
                      </Box>
                    </Box>
                    {"link" in testimonial && (
                      <Link
                        href={testimonial.link}
                        target="_blank"
                        sx={styles.ViewListingText}
                      >
                        View Listing
                      </Link>
                    )}
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
