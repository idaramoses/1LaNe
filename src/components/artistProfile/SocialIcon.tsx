import * as React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 aspect-square w-[17px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
  />
);
