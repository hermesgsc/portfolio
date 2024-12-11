"use client";

import React, { JSX } from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body" | "caption";
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold" | "light";
  align?: "left" | "center" | "right";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  weight = "normal",
  align = "left",
  className = "",
  ...props
}) => {
  const variantClasses: { [key: string]: string } = {
    title: "text-4xl font-extrabold text-primary-900 dark:text-primary-100",
    subtitle: "text-2xl font-semibold text-primary-800 dark:text-primary-200",
    body: "text-base font-normal text-secondary-700 dark:text-secondary-300",
    caption: "text-sm font-light text-secondary-600 dark:text-secondary-400",
  };

  const weightClasses: { [key: string]: string } = {
    normal: "font-normal",
    bold: "font-bold",
    light: "font-light",
  };

  const alignClasses: { [key: string]: string } = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const classes = [
    variantClasses[variant],
    weightClasses[weight],
    alignClasses[align],
    className,
  ].join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Typography;
