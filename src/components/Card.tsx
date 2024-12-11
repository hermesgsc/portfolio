"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`  border-[0.5px] gap-3 rounded-2xl max-w-[1080px] px-3 sm:px-6 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
