"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import getAge from "@/utils/age";

const AboutMe: React.FC = () => {
  return (
    <div className="p-0 md:p-6 border-none  bg-primary-800 ">
      <div className="flex items-center justify-center">
      <Card className="p-6 md:border-primary-500 w-full max-w-2xl mx-auto md:bg-primary-700 rounded-xl border-0 md:border-[0.1px] bg-primary-800">
          <div className="flex justify-between pb-4 p-6 text-primary-100">
            <Typography variant="subtitle" weight="bold" align="left">
              About Me
            </Typography>
            <Icon icon="mingcute:pencil-line" width="24" height="24" />
          </div>
          <Typography
            className=" p-6 text-primary-300 leading-6"
            variant="caption"
            weight="normal"
            align="left"
          >
            I&apos;m {getAge()} years old, and I&apos;m currently studying Systems
            Analysis and Development. I&apos;m a full-stack developer at
            BlackPay, working on both the frontend and backend, and I live in{" "}
            <strong className="text-green-600 font-medium ">Brazil</strong>. I
            started my journey in front-end web development but quickly
            discovered my love for back-end programming. My interest in
            technology and programming began in my childhood, sparked by a love
            for games and technology.
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
