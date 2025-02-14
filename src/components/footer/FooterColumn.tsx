import * as React from "react";
import { FooterLink } from "./FooterLink";
import { FooterColumnProps } from "./types";

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  
  <div className="flex flex-col">
    <div className="font-semibold leading-7 text-white">{title}</div>
    <div className="flex flex-col mt-4 w-full">
      {links.map((link, index) => (
        <div>
          {link.text =='Career'?( <FooterLink key={index} text={link.text} to="/contact-us" />):( <FooterLink key={index} text={link.text}/>)}
      
        </div>
      
      ))}
    </div>
  </div>
);

interface SocialLink {
  image: string;
  link: string;
}

interface SocialColumnProps {
  title: string;
  links: SocialLink[];
}

export const SocialColumn: React.FC<SocialColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 md:justify-center md:items-center">
    <div className="font-semibold leading-7 text-white md:hidden">{title} </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {links.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={item.image}
              alt={`Social media link ${index + 1}`}
              className="w-10 h-10"
            />
          </a>
        ))}
      </div>
    </div>
  );
};