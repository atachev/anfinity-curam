import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/Arrow";
import { buildImageUrl } from "@/lib/utils";

interface BlogPostCardProps {
  categories: Array<any>;
  title: string;
  description: string;
  readTime: string;
  image: any;
  href: string;
}

const BlogPostCard = ({
  categories,
  title,
  description,
  readTime,
  image,
  href,
}: BlogPostCardProps) => {
  return (
    <Link href={`blog/${href}`} className="block group">
      <div>
        <div className="relative w-full h-[251px]">
          <div className="w-full h-full bg-[#F8F8F8] rounded-[35px] overflow-hidden">
            {image && (
              <Image
                fill
                src={buildImageUrl(image?.url)}
                alt={title}
                className="w-full rounded-[35px] transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
              />
            )}
          </div>
        </div>
        <div className="mt-[40px]">
          <span className="text-[#8F8F8F] font-poppins font-normal text-base leading-[100%] tracking-[0%]">
            {categories?.map((category: any) => category.name).join(", ")}
          </span>
          <h3 className="mt-[12px] text-[#1A1A1A] group-hover:text-[#E51D28] transition-colors duration-500 Gilroy-Bold font-bold text-[25px] leading-[28px] tracking-[-1%]">
            {title}
          </h3>
          <p className="mt-[19px] text-[#1A1A1A] font-poppins font-light text-base leading-[22px] tracking-[0%]">
            {description}
          </p>
          <div className="flex mt-[33px] items-center">
            <span className="font-poppins font-semibold text-base leading-[100%] tracking-[0%] text-[#E51D28]">
              {readTime}
            </span>
            <div className="ml-[30px]">
              <Arrow color="#E51D28" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
