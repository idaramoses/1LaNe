import * as React from "react";
import { FooterLinkProps } from "./types";

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <div className="mt-3 opacity-75 md:text-sm">{text}</div>
);
