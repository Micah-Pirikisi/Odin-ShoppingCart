import React, { forwardRef } from "react";

const LazyImage = forwardRef(function LazyImage(
  { src, alt, className, width, height, ...rest },
  ref
) {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      {...rest}
    />
  );
});

export default LazyImage;
