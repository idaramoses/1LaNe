import * as React from "react";
import { GalleryImage } from "./GalleryImage";

interface ImageData {
  src: string;
  className?: string;
}

const images: ImageData[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/4faebbab0f38f18c18c28974e9a2d0ef7c35df1d8b8e6cb8614c5acb16373530?apiKey=924a520d2ecd4a249b6d608543649168&",
    className: "object-contain w-9 aspect-square",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/ea8ca605d2a26042f4de5f27a2d8a01783fab982a8ff4000a75406fc7deea4df?apiKey=924a520d2ecd4a249b6d608543649168&",
    className: "object-contain shrink-0 w-9 aspect-[0.97]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/e69779b23af69f75f9d7a4ac60e5099cc776b776372adff28d50ecd47ccbd53e?apiKey=924a520d2ecd4a249b6d608543649168&",
    className: "object-contain shrink-0 self-start w-9 aspect-square",
  },
];

export function ImageGallery(): JSX.Element {
  return (
    <div className="flex flex-col max-w-[90px]">
      <GalleryImage {...images[0]} />
      <div className="flex gap-5 mt-2.5">
        <GalleryImage {...images[1]} />
        <GalleryImage {...images[2]} />
      </div>
    </div>
  );
}
