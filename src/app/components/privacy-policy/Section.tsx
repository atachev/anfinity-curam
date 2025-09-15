import Heading from "../Heading";
import Text from "@/components/Text";

interface SectionProps {
  title: string;
  content: string;
}

const Section = ({ title, content }: SectionProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[85px] max-w-[1140px] mx-auto px-[25px] md:px-[0] pb-[55px] md:pb-[37px] md:pb-[96px]">
      <div className="flex-shrink-0 w-full md:w-[340px]">
        <Heading
          as="h2"
          className="font-poppins text-[25px] leading-[28px] font-[600] tracking-[0] text-[#000]"
        >
          {title}
        </Heading>
      </div>
      <div className="flex-1">
        <Text className="font-poppins text-[16px] leading-[22px] font-[300] tracking-[0] mt-0 mb-0">
          {content}
        </Text>
      </div>
    </div>
  );
};

export default Section;
