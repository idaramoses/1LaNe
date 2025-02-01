import * as React from "react";
import { ImageProps } from "../../types";

export const ShopImage: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain w-full ${className}`}
  />
);
