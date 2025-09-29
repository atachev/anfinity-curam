"use client";

import { usePathname } from "next/navigation";
import Heading from "../Heading";
import Text from "@/components/Text";

type Props = {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
};

const SectionHeader = ({
  component = "h2",
  title,
  subtitle,
  titleColor = "#000",
  subtitleColor = "#000",
}: Props) => {
  const pathname = usePathname();
  const isContactsPath = pathname === "/contacts";
  return (
    <div>
      <Heading
        as={component}
        style={{
          maxWidth: isContactsPath ? "480px" : "365px",
          color: titleColor,
        }}
        className="font-[700] text-[50px]/[50px] tracking-[-1px]"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          className={`font-poppins mt-[18px] font-light text-[16px]/[22px] ${
            isContactsPath ? "max-w-[450px]" : "max-w-[562px]"
          } text-[${subtitleColor}]`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default SectionHeader;
