import Heading from "../Heading";
import Text from "@/components/Text";
import { remark } from "remark";
import html from "remark-html";

interface SectionProps {
  title: string;
  content: string;
}

const Section = ({ title, content }: SectionProps) => {
  // Convert markdown to HTML
  const processedContent = remark().use(html).processSync(content).toString();

  return (
    <div className="flex flex-col md:flex-row md:gap-[85px] max-w-[1140px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
      <div className="flex-shrink-0 w-[340px]">
        <Heading
          as="h2"
          className="font-poppins text-[50px] leading-[50px] font-[600] tracking-[-0.01em] text-[#000]"
        >
          {title}
        </Heading>
      </div>
      <div className="flex-1 mt-[16px] md:mt-[0]">
        <Text
          className="font-poppins text-[22px] leading-[30px] font-[300] tracking-[0]"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>
    </div>
  );
};

export default Section;
