import * as React from "react";

interface GalleryImageProps {
  src: string;
  className?: string;
}

export function GalleryImage({
  src,
  className,
}: GalleryImageProps): JSX.Element {
  return (
    <img
      loading="lazy"
      src={src}
      className={className}
      alt=""
      role="presentation"
    />
  );
}
