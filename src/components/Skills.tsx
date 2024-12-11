// Skills.tsx

import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";
import Typography from "./Typography";
import skillsData from "@/utils/skills"; // Caso você ainda precise importar os dados de skills

const Skills: React.FC = () => {
  return (
    <section className="p-6 bg-secondary-100 flex items-center justify-center md:h-screen">
      <Card className="p-6 border-none w-full max-w-6xl bg-white shadow-lg rounded-xl">
        <div className="flex justify-between pb-4 p-6 text-primary-600">
          <Typography variant="subtitle" align="left" weight="bold">
            Skills
          </Typography>
          <Icon icon="mingcute:book-2-line" width="24" height="24" />
        </div>
        <Typography
          variant="caption"
          align="left"
          className="text-secondary-600 p-6 leading-7"
        >
          I specialize in building scalable and efficient applications using
          modern web technologies, with a strong foundation in both front-end
          and back-end development.
        </Typography>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className="p-3 flex flex-row items-center text-secondary-600 border-secondary-200 gap-3 justify-between select-none transition-all duration-300 rounded-xl hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700"
            >
              <Typography size="small" variant="caption">
                {skill.name}
              </Typography>
              <Icon icon={skill.icon} height={24} width={24} />
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Skills;
