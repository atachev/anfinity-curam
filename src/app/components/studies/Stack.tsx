import SectionHeader from "../homepage/SectionHeader";
import TechStackReact from "../icons/stack-logos/React";
import TechStackNestJS from "../icons/stack-logos/NestJS";
import TechStackPostgreSQL from "../icons/stack-logos/PostgreSQL";
import TechStackFigma from "../icons/stack-logos/Figma";
import TechStackStrapi from "../icons/stack-logos/Strapi";
import StackCard from "@/components/StackCard";
const Stack = ({ technologies }: { technologies: any[] }) => {
  return (
    <div className="pt-[152px] pb-[128px] md:pb-[169px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:max-w-[308px]">
            <SectionHeader
              title="Tech stack"
              subtitle="Our stack combines modern frameworks, robust backend solutions, and intuitive front-end tools to deliver a seamless and efficient digital experience."
              titleColor="#000"
            />
          </div>
          <div className="flex flex-1 md:justify-end">
            <div className="grid grid-cols-12 gap-[15px] w-full md:max-w-[716px] mt-[73px] md:mt-[159px]">
              {technologies.map((technology) => (
                <StackCard
                  title={technology.name}
                  icon={technology.icon}
                  key={technology.name}
                />
              ))}
              {/* <StackCard title="NestJS" icon={<TechStackNestJS />} />
              <StackCard title="PostgreSQL" icon={<TechStackPostgreSQL />} />
              <StackCard title="Figma" icon={<TechStackFigma />} />
              <StackCard title="Strapi" icon={<TechStackStrapi />} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
