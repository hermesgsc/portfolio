"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Project {
  title: string;
  description: string;
  lottieUrl: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  bg: string;
  border: string;
  text: string;
}

export const projectsData: Project[] = [
  {
    title: "Architecture System",
    description: "Intelligent Management System for Architecture Offices",
    lottieUrl:
      "https://lottie.host/3ff8a794-6591-4098-9358-d333af171ec7/J7Y0V38RH1.json",
    technologies: [
      {
        name: "Nest",
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
      },
    ],
  },
  {
    title: "Library System",
    description: "Intelligent System for Managing Library Resources",
    lottieUrl:
      "https://lottie.host/bab4df11-56cd-4007-847e-398a47285a89/tSCcNH9gaM.lottie",
    technologies: [
      {
        name: "Nest",
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
      },
    ],
  },
  {
    title: "Hospital System",
    description: "A System for Managing Hospital Resources and Staff.",
    lottieUrl:
      "https://lottie.host/e3b0368f-eb86-451d-a04c-4171ec033d9d/jIF16eXg6u.lottie",
    technologies: [
      {
        name: "Nest",
        bg: "bg-red-100",
        border: "border-red-200",
        text: "text-red-700",
      },
      {
        name: "MongoDB",
        bg: "bg-green-100",
        border: "border-green-200",
        text: "text-green-700",
      },
      {
        name: "React",
        bg: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-700",
      },
      {
        name: "Next",
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-700",
      },
      {
        name: "Tailwind",
        bg: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-700",
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="p-6 bg-primary-800 flex items-center justify-center">
      <Card className="p-6 border-primary-500 w-full max-w-6xl bg-primary-700 shadow-lg rounded-xl">
        <div className="flex justify-between pb-4 p-6 text-primary-100">
          <Typography variant="subtitle" align="left" weight="bold">
            Projects
          </Typography>
          <Icon icon="mingcute:code-line" height={24} width={24} />
        </div>

        <Typography
          variant="caption"
          align="left"
          className="text-primary-300 p-6 leading-7"
        >
          My projects showcase my expertise in crafting scalable, efficient, and
          user-centric applications, leveraging the latest web technologies.
        </Typography>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border-none p-6 rounded-[10px] gap-3 bg-primary-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">
                <DotLottieReact
                  src={project.lottieUrl}
                  loop
                  autoplay
                  className="w-80 items-center justify-center"
                />
              </div>
              <Typography variant="body" className="text-primary-100 pt-6">
                {project.title}
              </Typography>
              <Typography
                className="text-primary-300"
                align="left"
                variant="caption"
              >
                {project.description}
              </Typography>

              <div className="flex w-full gap-2 flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <Typography
                    key={techIndex}
                    className={`px-2 text-center ${tech.bg} border ${tech.border} ${tech.text} rounded-full`}
                    variant="caption"
                  >
                    {tech.name}
                  </Typography>
                ))}
              </div>

              <div>
                <button className="flex p-3 items-center justify-between w-full mt-3 rounded-xl border text-primary-200 border-primary-500 gap-3  transition-all duration-300 hover:bg-primary-600 hover:border-secondary-800 hover:text-primary-50">
                  Deploy
                  <Icon icon="mingcute:rocket-line" width="24" height="24" />
                </button>
                <button className="flex items-center justify-between w-full mt-3 rounded-xl border text-primary-200 border-primary-500 p-3  hover:bg-secondary-800 hover:border-secondary-300 hover:text-primary-50 transition-all duration-300">
                  Repository
                  <Icon icon={"mdi:github"} height={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Projects;
