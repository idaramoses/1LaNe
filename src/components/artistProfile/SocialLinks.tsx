import * as React from "react";
import { SocialIcon } from "./SocialIcon";
import { SocialLinksData } from "./types";

const socialData: SocialLinksData = {
  icons: [
    {
      src: "images/facebook.svg",
      alt: "Social media icon 2",
    },
    {
      src: "images/x.svg",
      alt: "Social media icon 3",
    },
    {
      src: "images/instagram.svg",
      alt: "Social media icon 1",
    },
    
   
    {
      src: "images/youtube.svg",
      alt: "Social media icon 4",
    },
    {
      src: "images/tictok.svg",
      alt: "Social media icon 5",
    },
  ],
};

export const SocialLinks: React.FC = () => (
  <div className="flex md:items-center md:justify-center gap-10 mt-4 max-w-full w-[152px]">
    <div className="flex flex-1 gap-4 md:items-center md:justify-center">
      <SocialIcon {...socialData.icons[0]} />
      <SocialIcon {...socialData.icons[1]} />
      <SocialIcon {...socialData.icons[2]} />
      <SocialIcon {...socialData.icons[3]} />
      <SocialIcon {...socialData.icons[4]} />
    </div>
   
  </div>
);
