"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  const pathname = usePathname();
  const isHomePath = pathname === "/";
  const isContactsPath = pathname === "/contacts";
  const isCaseStudyPage = pathname.includes("/case-studies/");
  const isServicePage = pathname.includes("/services/");

  return (
    <div
      className={`mx-auto max-w-[1440px] xl:max-w-full rounded-[40px] bg-[#F8F8F8] ${
        isHomePath || isContactsPath || isCaseStudyPage || isServicePage
          ? "-mt-[91px]"
          : "mt-[141px]"
      }`}
    >
      <div
        className={`4xl:max-w-[1340px] mx-auto px-[70px] md:px-[109px] ${
          isHomePath || isContactsPath || isCaseStudyPage || isServicePage
            ? "pt-[149px] md:pt-[185px]"
            : "pt-[70px] md:pt-[94px]"
        } pb-[47px] md:pb-[105px] grid md:gap-4 grid-cols-12 4xl:px-[0]`}
      >
        <div className="col-span-12 md:col-span-6 flex flex-col items-center md:items-start md:justify-between">
          <Link href="/">
            <Logo type="footer" />
          </Link>
          <p className="text-gray-600 hidden md:block mt-0 mb-[12px]">
            &copy; 2025 Anfinity. All rights reserved.
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 mt-[43px] md:mt-0">
          <span
            className={`${poppins.className} text-[20px] md:text-[16px] font-[600] leading-[60px] md:leading-[25px] tracking-[0%] text-center md:text-left text-[#8F8F8F] block`}
          >
            Company
          </span>
          <nav className="flex flex-col items-center md:items-start md:mt-[31px]">
            {/* <Link
              href="/about"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              About us
            </Link> */}
            <Link
              href="/services"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              Case studies
            </Link>
            {/* <Link
              href="/blog"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              Blog
            </Link> */}
          </nav>
        </div>
        <div className="col-span-12 md:col-span-2 mt-[29px] md:mt-0">
          <span
            className={`${poppins.className} text-[20px] md:text-[16px] font-[600] leading-[60px] md:leading-[25px] tracking-[0%] text-center md:text-left text-[#8F8F8F] block`}
          >
            Legal
          </span>
          <nav className="flex flex-col items-center md:items-start md:mt-[31px]">
            <Link
              href="/cookie-policy"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              Cookie policy
            </Link>
            <Link
              href="/privacy-policy"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              Privacy policy
            </Link>
          </nav>
        </div>
        <div className="col-span-12 md:col-span-2 mt-[29px] md:mt-0">
          <span
            className={`${poppins.className} text-[20px] md:text-[16px] font-[600] leading-[60px] md:leading-[25px] tracking-[0%] text-center md:text-left text-[#8F8F8F] block`}
          >
            Contact us
          </span>
          <div className="flex flex-col items-center md:items-start md:mt-[31px]">
            <a
              href="mailto:office@anfinity.bg"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              office@anfinity.bg
            </a>
            <a
              href="tel:+359897879980"
              className={`${poppins.className} font-light text-[20px] md:text-[16px] leading-[60px] md:leading-[40px] md:leading-[40px] hover:text-[#00000080] transition-colors duration-300`}
            >
              +359 897 879 980
            </a>
          </div>
        </div>
        <div className="col-span-12 mt-[50px] md:hidden">
          <span
            className={`${poppins.className} flex items-center justify-center font-[400] text-[#8F8F8F] text-[14px] leading-[16px]`}
          >
            &copy; 2025 Anfinity. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
