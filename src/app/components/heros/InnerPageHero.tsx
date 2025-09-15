import { remark } from "remark";
import html from "remark-html";
import Text from "@/components/Text";

interface InnerPageHeroProps {
  title: string;
  category?: string;
  author?: string;
  position?: string;
  date?: string;
  readTime?: string;
  description: string;
  mainColor?: string;
  client?: string;
  website?: string;
  industry?: any;
  services?: any[];
  tags?: any[];
}

const InnerPageHero = ({
  title,
  category,
  author,
  position,
  date,
  readTime,
  description,
  mainColor = "#E51D28",
  client,
  website,
  industry,
  services,
  tags,
}: InnerPageHeroProps) => {
  const processedDescription = remark()
    .use(html)
    .processSync(description)
    .toString();

  return (
    <div className="max-w-[1140px] mx-auto px-[25px] md:px-[0] pt-[108px] md:pt-[102px] pb-[0] md:pb-[25px] animate-reveal-up 4xl:max-w-[1440px]">
      <div className="flex flex-row justify-between">
        <h1
          className="Gilroy-Bold text-[50px] leading-[50px] tracking-[-0.01em] max-w-[461px]"
          style={{ color: mainColor }}
        >
          {title}
        </h1>
      </div>
      <div className="mt-[42px] md:mt-[0] flex flex-col md:flex-row justify-between">
        <div className="pt-0 md:pt-[162px] flex flex-col gap-[16px]">
          {category && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                category:
              </span>
              <span>{category}</span>
            </div>
          )}
          {(author || position) && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                written by:
              </span>
              <span>{author}</span>
              <span className="text-[#8f8f8f] font-poppins text-[14px] leading-[22px] font-[400]">
                {position}
              </span>
            </div>
          )}
          {date && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                date:
              </span>
              <span className="">{date}</span>
            </div>
          )}
          {readTime && (
            <span className="text-[#E51D28] font-poppins text-[16px] leading-[22px] font-[400]">
              {readTime}
            </span>
          )}
          {client && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                client:
              </span>
              <span className="">{client}</span>
            </div>
          )}
          {website && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                website:
              </span>
              <a
                className="font-poppins text-[16px] leading-[22px] font-[600] text-[#8f8f8f] hover:text-[#e51d28] transition-all duration-300 ease-in-out"
                href={website}
                rel="noopener noreferrer external"
                target="_blank"
              >
                {website}
              </a>
            </div>
          )}
          {industry && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                industry:
              </span>
              <span className="">{industry.name}</span>
            </div>
          )}
          {services && (
            <div className="flex flex-col">
              <span className="font-poppins text-[16px] leading-[22px] font-[600]">
                services:
              </span>
              <div className="flex flex-col">
                {services.map((service: any, index: number) => (
                  <span key={index} className="">
                    {service?.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-end mt-[42px] md:mt-[0] md:hidden">
          <div className="flex flex-row gap-[11px] w-full max-w-[718px] 4xl:max-w-[855px] flex-wrap">
            {tags?.map((tag: any, index: number) => (
              <span
                key={index}
                className="inline-flex pt-[5px] pb-[6px] pl-[12px] pr-[12px] font-poppins font-[400] text-[14px] leading-[22px] rounded-[200px] bg-[#000] hover:bg-[#545454] transition-all duration-300 ease-in-out text-[#fff]"
              >
                {tag?.text}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-[718px] 4xl:max-w-[855px]">
          <Text
            className="font-poppins text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] font-[300] mt-[103px] md:mt-[18px]"
            dangerouslySetInnerHTML={{ __html: processedDescription }}
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-end mt-[42px] md:mt-[0]">
        <div className="flex flex-row gap-[11px] w-full max-w-[718px] 4xl:max-w-[855px] flex-wrap">
          {tags?.map((tag: any, index: number) => (
            <span
              key={index}
              className="inline-flex pt-[5px] pb-[6px] pl-[12px] pr-[12px] font-poppins font-[400] text-[14px] leading-[22px] rounded-[200px] bg-[#000] hover:bg-[#545454] transition-all duration-300 ease-in-out text-[#fff]"
            >
              {tag?.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerPageHero;
