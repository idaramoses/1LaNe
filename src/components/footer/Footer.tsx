import * as React from "react";
import { FooterColumn, SocialColumn } from "./FooterColumn";
import { SubscribeForm } from "./SubscribeForm";

const productLinks = [
  { text: "Artistic Services" },
  { text: "Athlete Representation" },
  { text: "Merchandise Development" },
  { text: "Sync Licensing" },
];

const informationLinks = [
  { text: "FAQ" },
  { text: "Blog" },
  { text: "Support" },
];

const companyLinks = [
  { text: "About us" },
  { text: "Career" },
  { text: "Contact us" },
  { text: "1Lane" },
];

export const Footer: React.FC = () => {
  const handleSubscribe = (email: string) => {
    console.log("Subscription email:", email);
  };

  return (
    <div className="flex flex-col rounded-none px-20 md:px-0  bg-black  mb-20 md:mb-0 font-poppins">
      <div className="flex flex-col items-center py-12 px-10 md:px-4 w-full rounded-xl bg-[#081a25] bg-opacity-60 md:w-full">
        <div className="w-full">
          <div className="flex gap-5 md:flex-col">
            <div className="flex flex-col w-[73%] md:ml-0 md:w-full">
              <div className="flex flex-wrap gap-10 items-start mt-3.5 text-base text-white md:mt-10 md:w-full">
                <div className="flex flex-col w-[225px]">
                  <FooterColumn title="Product" links={productLinks} />
                </div>
                <div className="flex flex-col w-[135px] md:hidden">
                  <FooterColumn title="Information" links={informationLinks} />
                </div>
                <div className="flex flex-col w-32 ">
                  <FooterColumn title="Company" links={companyLinks} />
                </div>
                <div className="flex flex-col w-32 md:hidden">
                  <SocialColumn title="Social Media" links={companyLinks} />
                </div>
                <div className="flex shrink-0 h-32 w-[129px]" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] md:ml-0 md:w-full">
              <div className="flex flex-col grow justify-center px-6 py-4 w-full text-white bg-[#161C22] rounded-xl md:px-5 md:mt-10">
                <SubscribeForm onSubmit={handleSubscribe} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex self-stretch mt-12 w-full border border-solid bg-white bg-opacity-20 border-blue-950 border-opacity-70 min-h-[2px] md:mt-10 md:w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full text-sm text-white max-w-[1146px] md:w-full">
          <div className="self-stretch my-auto text-3xl md:text-lg text-white">1Lane</div>
          <div className="flex gap-9 md:text-sm self-stretch my-auto whitespace-nowrap rounded-none w-[220px]">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookies</div>
          </div>
          <div className="self-stretch md:text-xs md:text-center my-auto rounded-none min-w-[240px] w-[342px]">
            © 2024 1lane LTD. Elevating Talent, Building Future{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
