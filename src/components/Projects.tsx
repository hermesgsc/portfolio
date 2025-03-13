import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  deployUrl: string | undefined;
  repositoryUrl: string;
}

interface Technology {
  name: string;
  bg: string;
  border: string;
  text: string;
}

export const projectsData: Project[] = [
  {
    title: "Library - API",
    description:
      "A RESTful API built for managing book resources, enabling CRUD operations.",
    technologies: [
      {
        name: "Node.js",
        bg: "bg-green-300",
        border: "border-green-500",
        text: "text-green-900",
      },
      {
        name: "Express",
        bg: "bg-gray-300",
        border: "border-gray-500",
        text: "text-gray-900",
      },
      {
        name: "MongoDB",
        bg: "bg-green-300",
        border: "border-green-500",
        text: "text-green-900",
      },
      {
        name: "JavaScript",
        bg: "bg-yellow-300",
        border: "border-yellow-500",
        text: "text-yellow-900",
      },
    ],
    repositoryUrl: "https://github.com/hermesgsc/books-api-rest",
    deployUrl: "",
  },
  {
    title: "MoneyPlan",
    description:
      "MoneyPlan is a complete financial management tool that helps users track their income and expenses.",
    technologies: [
      {
        name: "TypeScript",
        bg: "bg-cyan-300",
        border: "border-cyan-500",
        text: "text-cyan-900",
      },
      {
        name: "Next.js",
        bg: "bg-white",
        border: "border-gray-500",
        text: "text-black",
      },
      {
        name: "Tailwind.css",
        bg: "bg-blue-300",
        border: "border-blue-500",
        text: "text-blue-900",
      },
      {
        name: "Prisma",
        bg: "bg-blue-300",
        border: "border-blue-500",
        text: "text-blue-900",
      },
      {
        name: "PostgreSQL",
        bg: "bg-green-300",
        border: "border-green-500",
        text: "text-green-900",
      },
    ],
    repositoryUrl: "https://github.com/hermesgsc/money-plan",
    deployUrl: "https://money-plan.vercel.app/",
  },
  {
    title: "MoneyPlan - API",
    description:
    "MoneyPlan is a complete financial management tool that helps users track their income and expenses.",
    technologies: [
      {
        name: "TypeScript",
        bg: "bg-cyan-300",
        border: "border-cyan-500",
        text: "text-cyan-900",
      },
      {
        name: "NestJS",
        bg: "bg-red-300",
        border: "border-red-500",
        text: "text-red-900",
      },
      {
        name: "Prisma",
        bg: "bg-blue-300",
        border: "border-blue-500",
        text: "text-blue-900",
      },
      {
        name: "PostgreSQL",
        bg: "bg-green-300",
        border: "border-green-500",
        text: "text-green-900",
      },
    ],
    repositoryUrl: "https://github.com/hermesgsc/money-plan-api",
    deployUrl: "https://money-plan.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const handleButtonClick = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("URL not available for this project.");
    }
  };

  return (
    <section className="p-0 md:p-6 bg-primary-800 flex items-center justify-center">
<Card className="p-6 md:border-primary-500 w-full max-w-2xl mx-auto md:bg-primary-700 rounded-xl border-0 md:border-[0.1px] bg-primary-800">


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

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {" "}
          {/* Updated for 2-column layout */}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-full border-none p-6 rounded-[10px] gap-3 md:bg-primary-800 bg-primary-700"
            >
              <Typography variant="body" className="text-primary-100 pt-6">
                {project.title}
              </Typography>
              <Typography
                className="text-primary-300 overflow-hidden line-clamp-4"
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

              <div className="mt-auto">
                {" "}
                {project.deployUrl !== "" && (
                  <button
                    onClick={() => handleButtonClick(project.deployUrl)}
                    className="flex p-3 items-center justify-between w-full mt-3 rounded-xl border text-primary-200 border-primary-500 gap-3 transition-all duration-300 hover:bg-primary-600 hover:border-secondary-800 hover:text-primary-50"
                  >
                    Deploy
                    <Icon icon="mingcute:rocket-line" width="24" height="24" />
                  </button>
                )}
                {project.repositoryUrl !== "" && (
                  <button
                    onClick={() => handleButtonClick(project.repositoryUrl)}
                    className="flex items-center justify-between w-full mt-3 rounded-xl border text-primary-200 border-primary-500 p-3 hover:bg-secondary-800 hover:border-secondary-300 hover:text-primary-50 transition-all duration-300"
                  >
                    Repository
                    <Icon icon={"mdi:github"} height={24} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Projects;
