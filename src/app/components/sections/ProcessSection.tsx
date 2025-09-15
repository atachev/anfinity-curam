import SectionHeader from "../homepage/SectionHeader";
import ProcessSlider from "../ProcessSlider";
import Text from "@/components/Text";

const ProcessSection = ({
  steps,
  primaryColor,
  secondaryColor,
}: {
  steps: any[];
  primaryColor: string;
  secondaryColor: string;
}) => {
  return (
    <div className="min-h-[730px] bg-black text-white py-12 md:py-[118px] rounded-[35px] md:rounded-[40px] mt-[118px]">
      <div className="px-6 md:px-[110px]">
        <SectionHeader title="Process" titleColor={primaryColor} />
      </div>
      <div className="grid grid-cols-12 gap-3 mt-6 px-6 md:px-[110px]">
        <div className="col-span-12 md:col-start-5 md:col-end-[none]">
          <Text className="font-light text-[22px] leading-[30px]">
            We follow a structured and transparent approach to ensure every
            project is delivered with precision and efficiency. Explore our
            step-by-step process and see how we bring ideas to life.
          </Text>
        </div>
      </div>
      <div className="mt-[101px] overflow-hidden">
        <ProcessSlider
          steps={steps}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>
    </div>
  );
};

export default ProcessSection;
