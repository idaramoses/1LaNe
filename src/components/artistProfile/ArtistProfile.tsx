import * as React from "react";
import { SocialLinks } from "./SocialLinks";

export const ArtistProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full mt-20 rounded-none max-w-[377px] mx-20 ">
      <div className="self-stretch w-full text-3xl font-semibold text-white">
        <span className="text-neutral-400">1 Lift</span>{" "}
        <span className="text-white">artists</span> 'N' empower
      </div>
      <div>
      <div className="mt-16 text-5xl font-semibold text-white">Zichy</div>
      <div className="text-base  leading-8 text-stone-300">
        After careful consideration and review of all applications, we regret to
        inform you that we have decided to move forward with other candidates
        whose qualifications more closely align with our current needs for the
        role.
      </div>
      <SocialLinks />
      <div className="flex gap-2.5 mt-7 max-w-full text-xs text-white w-[139px]">
        <div
          className="gap-3 self-stretch px-6 py-2 rounded-2xl border border-solid border-neutral-500"
          role="button"
          tabIndex={0}
        >
          Fan Link
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/924a520d2ecd4a249b6d608543649168/9f25834d3a8ab098a4e0e9df8aef21f24d8c27f2eab9be50e77de4fd9c8d5103?apiKey=924a520d2ecd4a249b6d608543649168&"
          alt="Fan link icon"
          className="object-contain shrink-0 aspect-square w-[34px]"
        />
      </div>

      </div>
     <div></div>

    </div>
  );
};
