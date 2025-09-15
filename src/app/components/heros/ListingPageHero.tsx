import Heading from "@/components/Heading";
import Text from "@/components/Text";

interface ListingPageHeroProps {
  title: string;
  description: string;
  textColor: string;
}

const ListingPageHero = ({
  title,
  description,
  textColor,
}: ListingPageHeroProps) => {
  return (
    <div className="max-w-[1140px] 4xl:max-w-[1440px] mx-auto px-[25px] md:px-[0] pt-[108px] md:pt-[102px] pb-[125px]">
      <div className="overflow-hidden">
        <Heading
          as="h1"
          className={`text-[${textColor}] text-[60px] leading-[60px] md:text-[130px] md:leading-[120px] tracking-[-0.01em] max-w-[715px] xl:max-w-[854px] animate-reveal-up`}
        >
          {title}
        </Heading>
      </div>
      <div className="w-full flex justify-end mt-[37px] md:mt-[72px]">
        <Text className="max-w-[716px] 4xl:max-w-[855px] text-[22px] leading-[30px] tracking-[0] font-light">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default ListingPageHero;
