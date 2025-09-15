import SectionHeader from "./SectionHeader";
import Button from "../Button";
import StudyCard from "../studies/StudyCard";
import { getCaseStudies } from "@/lib/fetchers/getCaseStudies";

const CaseStudies = async () => {
  const projects: any[] = await getCaseStudies();
  return (
    <div className="flex flex-col max-w-[1140px] mt-[149px] pb-[127px] md:pb-[151px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto] bg-[#fff]">
      <SectionHeader
        title="Case studies"
        subtitle="We take products and brands to the next level."
      />
      <div className="mt-[40px]">
        <Button
          mode="link"
          text="View all"
          href="/case-studies"
          variant="black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[71px] md:gap-[29px] max-w-[1140px] mx-auto mt-[112px] ml-[0] mr-[0]">
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {projects?.length &&
            projects
              .filter((_, index) => index % 2 === 0)
              .map((project, index) => (
                <StudyCard
                  key={index}
                  project={project}
                  isEven={index % 2 === 0}
                />
              ))}
        </div>
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {projects?.length &&
            projects
              .filter((_, index) => index % 2 !== 0)
              .map((project, index) => (
                <StudyCard
                  key={index}
                  project={project}
                  isEven={index % 2 !== 0}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
