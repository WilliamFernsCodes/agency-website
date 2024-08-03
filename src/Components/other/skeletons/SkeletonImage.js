// components/SkeletonImage.js
import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Image from "next/image";

const SkeletonImage = ({
  src,
  alt,
  styles,
  imageProps = {},
  imageStyles = {},
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Box
      sx={{
        ...styles,
        border: loading ? "1px solid #e0e0e0" : "unset",
      }}
    >
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          animation="pulse"
          height="100%"
        />
      )}
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={handleImageLoad}
        styles={{ display: loading ? "none" : "block", ...imageStyles }}
        {...imageProps}
      />
    </Box>
  );
};

export default SkeletonImage;
