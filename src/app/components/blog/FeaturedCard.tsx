import Heading from "../Heading";
import Arrow from "../icons/Arrow";
import Text from "@/components/Text";
import Link from "next/link";
import Image from "next/image";

interface FeaturedCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  image: any;
}
const FeaturedCard = ({
  category,
  title,
  description,
  href,
  image,
}: FeaturedCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col md:flex-row max-w-[1140px] mx-auto mt-[78px] md:mt-[142px] group"
    >
      <div className="flex-1 md:pr-[125px] order-1 md:order-0 mt-[40px] md:mt-[0]">
        <span className="text-[#8F8F8F] font-poppins font-normal text-[16px] leading-[100%] tracking-[0%]">
          {category}
        </span>
        <Heading
          as="h2"
          className="mt-2 text-[#1A1A1A] group-hover:text-[#E51D28] transition-colors duration-500 Gilroy-Bold text-[30px] leading-[35px] tracking-[0%]"
        >
          {title}
        </Heading>
        <Text className="mt-[17px]">{description}</Text>
        <div className="flex mt-[34px] items-center">
          <span className="font-poppins font-semibold text-base leading-[24px] tracking-[0%] text-[#E51D28]">
            4 min. read
          </span>
          <div className="ml-[30px]">
            <Arrow color={"#E51D28"} />
          </div>
        </div>
      </div>
      <div className="order-0 md:order-1">
        <div className="w-full bg-[#F8F8F8] rounded-[35px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="rounded-[35px] transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
