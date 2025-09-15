import Heading from "../Heading";
import StudyCard from "./StudyCard";

const StudiesWrapper = ({
  title,
  studies,
}: {
  title: string;
  studies: any[];
}) => {
  return (
    <div className="flex flex-col max-w-[1140px] mt-[115px] md:mt-[149px] pb-[141px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
      <Heading
        as="h2"
        className="font-[700] text-[50px] leading-[50px] tracking-[-0.01em]"
      >
        {title}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[71px] md:gap-[29px] max-w-[1140px] mx-auto mt-[104px]">
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {studies
            .filter((_, index) => index % 2 === 0)
            .map((study, index) => (
              <StudyCard key={index} project={study} isEven={index % 2 === 0} />
            ))}
        </div>
        <div className="flex flex-col gap-[71px] md:gap-[141px]">
          {studies
            .filter((_, index) => index % 2 !== 0)
            .map((study, index) => (
              <StudyCard key={index} project={study} isEven={index % 2 !== 0} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudiesWrapper;
