import * as React from "react";
import { SocialIcon } from "./SocialIcon";
import { SocialLinksData } from "./types";

const socialData: SocialLinksData = {
  icons: [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/53b97b9f69da6d8d43a16bd3bb368cd85449bd3b85dd734fc4144d8a57aec864?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/8951ff38bc8c4c3ced99f36384802b33db533611ff3657f4c292ae84a6d8c725?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/8596fb84e7364fefaac78118b9fa124a2936352fc2123c752fe5cb59a7d30046?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Social media icon 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/94ca629dbd99637dc7bc1f98a048820b69a5ebe07b9a796ddab3ce4adadbb5d4?apiKey=924a520d2ecd4a249b6d608543649168&",
      alt: "Social media icon 4",
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
    </div>
   
  </div>
);
