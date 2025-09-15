import { ReactNode } from "react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/utils";

interface StackCardProps {
  title: string;
  icon: any;
}

const StackCard = ({ title, icon }: StackCardProps) => {
  return (
    <div className="col-span-6 md:col-span-4 flex flex-col justify-between bg-[#f8f8f8] w-full md:min-w-[229px] min-h-[162px] rounded-[20px] text-right pr-[20px] pl-[20px] pb-[20px]">
      <div className="flex items-end justify-end">
        {icon?.url && <img src={buildImageUrl(icon?.url)} alt={title} />}
      </div>
      <div className="flex items-end justify-start font-poppins font-semibold text-[16px] leading-[22px] tracking-[0%] text-[#8f8f8f]">
        {title}
      </div>
    </div>
  );
};

export default StackCard;
