import React, { useState } from "react";
import { Box, Skeleton, styled } from "@mui/material";
import Image from "next/image";

//Styles
import styles from "Styles/Testimonials/Slider.styles";

export default function TestimonialsSkeleton() {
  const testimonialsChildren = Array.from({ length: 10 }).map((_, index) => (
    //   breakpoints: {
    //   values: {
    //     xxs: 0, // Double Extra Small Devices
    //     xs: 360, // Extra Small Devices
    //     sm: 480, // Small Devices
    //     msm: 576, // Medium Small Devices
    //     lsm: 640, // Large Small Devices
    //     smd: 768, // Small Medium Devices
    //     md: 992, // Medium Devices
    //     lg: 1200, // Large Devices
    //     xl: 1536, // Extra Small Devices
    //     xxl: 1980, // Double Extra Devices
    //   },
    // },
    <Skeleton
      className="embla__slide"
      variant="rectangular"
      sx={{
        ...styles.EmblaSlideBase,
        height: { xs: "310px", md: "345px", lg: "400px" },
      }}
      key={index}
    ></Skeleton>
  ));
  return testimonialsChildren;
}
