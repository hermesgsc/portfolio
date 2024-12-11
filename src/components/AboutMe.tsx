"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";

const AboutMe: React.FC = () => {
  return (
    <div className="p-6 border-none py-12 bg-secondary-100">
      <div className="flex items-center justify-center">
        <Card className="p-6 border-secondary-200 bg-white dark:bg-secondary-800">
          <div className="flex justify-between pb-4 p-6 text-primary-900 dark:text-primary-100">
            <Typography variant="subtitle" weight="bold" align="left">
              About Me
            </Typography>
            <Icon
              icon="mingcute:pencil-line"
              className="text-primary-600 dark:text-primary-400"
              width="24"
              height="24"
            />
          </div>
          <Typography
            className="text-secondary-700 dark:text-secondary-200 p-6 leading-7"
            variant="body"
            weight="normal"
            align="left"
          >
            I&apos;m 21 years old, and I&apos;m currently studying Systems
            Analysis and Development. I&apos;m a full-stack developer at
            BlackPay, working on both the frontend and backend, and I live in{" "}
            <strong className="text-accent-500 font-medium select-none">
              Brazil
            </strong>
            . I started my journey in front-end web development but quickly
            discovered my passion for back-end programming. My interest in
            technology and programming began in my childhood, sparked by a love
            for games and technology.
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
