
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FooterLinkProps {
  text: string;
  to?: string;
  onClick?: () => void;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ text, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="mt-3 opacity-75 text-[16px] md:text-sm cursor-pointer hover:opacity-100 transition-opacity"
    >
      {text}
    </div>
  );
};
