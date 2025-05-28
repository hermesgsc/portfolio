"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import getAge from "@/utils/age";

const AboutMe: React.FC = () => {
  return (
    <div className="p-0 md:p-6 border-none bg-primary-800">
      <div className="flex items-center justify-center">
        <Card className="p-6 md:border-primary-500 w-full max-w-2xl mx-auto md:bg-primary-700 rounded-xl border-0 md:border-[0.1px] bg-primary-800">
          <div className="flex justify-between pb-4 p-6 text-primary-100">
            <Typography variant="subtitle" weight="bold" align="left">
              About Me
            </Typography>
            <Icon icon="mingcute:pencil-line" width="24" height="24" />
          </div>
          <Typography
            className="p-6 text-primary-300 leading-6"
            variant="caption"
            weight="normal"
            align="left"
          >
            I&apos;m {getAge()} years old and currently work as a data analyst
            focused on finance. I use Power BI, Python, and SQL to analyze
            financial data, create dashboards, and optimize business processes.
            <br />
            Previously, I worked as a full-stack developer at a digital bank,
            contributing to systems using NestJS, TypeScript, and React. That
            experience sharpened my technical and analytical skills, which I now
            apply to data-driven decision-making.
            <br />
            I’m based in{" "}
            <strong className="text-green-600 font-medium">Brazil</strong> and
            currently studying Systems Analysis and Development. My passion for
            technology started in childhood, and today, I enjoy turning complex
            data into clear insights that support growth and innovation.
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
