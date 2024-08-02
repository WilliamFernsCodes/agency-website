// components/SkeletonImage.js
import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Image from "next/image";

const SkeletonImage = ({
  width,
  height,
  src,
  alt,
  styles,
  imageProps = {},
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Box sx={styles}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          animation="pulse"
          height="100%"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
        {...imageProps}
      />
    </Box>
  );
};

export default SkeletonImage;
