import * as React from "react";
import { ShopImage } from "./ShopImage";
import { ShopImageContainerProps } from "../../types";

export const ShopImageContainer: React.FC<ShopImageContainerProps> = ({
  images,
}) => (
  <div className="flex gap-2 md:flex-col">
    {images.map((image, index) => (
      <div
        key={index}
        data-aos="fade-zoomIn" data-aos-delay="800"
        className={`flex flex-col ${
          index === 0 ? "w-[43%]" : "w-[57%] ml- md:hidden"
        } md:ml-0 md:w-full`}
      >
        <ShopImage
          src={image.src}
          alt={image.alt}
          className={`aspect-[${index === 0 ? "0.6" : "0.8"}]`}
        />
      </div>
    ))}
  </div>
);
