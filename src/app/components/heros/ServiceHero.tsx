"use client";

import { useMemo, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import ServiceWebDevelopment from "../../../assets/service-web-development-icon.svg";
import Heading from "../Heading";
import Logo from "../Logo";
import { buildImageUrl } from "@/lib/utils";

const ServiceHero = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
}) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigation = useMemo(
    () => [
      {
        name: "Services",
        href: "/services",
        active: true,
      },
      {
        name: "Case studies",
        href: "/case-studies",
        active: false,
      },
      // {
      //   name: "About Us",
      //   href: "/about-us",
      //   active: false,
      // },
      // { name: "Blog", href: "/blog", active: false },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // At the top of the page
        setIsSticky(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up and not at top
        setIsSticky(true);
      } else {
        // Scrolling down
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-[#f5f5f5] ${
        isMobile ? "rounded-[35px]" : "rounded-b-[40px]"
      } relative overflow-hidden`}
    >
      {isMobile && (
        <>
          <div
            className={`rounded-t-[35px] md:rounded-t-[40px] ${
              isSticky ? "h-[85px] md:h-[105px]" : "h-0"
            } bg-[#f5f5f5]`}
          />
          <div
            className={`${
              isSticky
                ? "fixed top-[40px] left-0 right-0 z-50 transform translate-y-0"
                : "relative"
            } transition-transform duration-300`}
          >
            <div
              className={`max-w-[1440px] mx-auto ${
                isSticky
                  ? "md:[width:calc(100%-80px)] [width:calc(100%-10px)]"
                  : "w-full"
              }`}
            >
              <div className={`${isSticky ? "bg-[#000] rounded-[200px]" : ""}`}>
                <nav
                  className="w-full flex items-center justify-between pt-[25px] md:pt-[32px] pb-[25px] md:pb-[35px] pl-[25px] md:pl-[50px] pr-[25px] md:pr-[52px]"
                  aria-label="Global"
                >
                  <div className="flex items-center">
                    <Link href="/" aria-label="Home">
                      <Logo
                        type="navigation"
                        isSticky={isSticky}
                        activePage="service"
                      />
                    </Link>
                  </div>
                  {/* Mobile menu button */}
                  <div className="flex md:hidden">
                    <button type="button" onClick={() => setIsMenuOpen(true)}>
                      <span className="sr-only">Open main menu</span>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="-0.5"
                          x2="29"
                          y2="-0.5"
                          transform="matrix(-1 7.15635e-08 1.06797e-07 1 30 30)"
                          stroke={isSticky ? "white" : "black"}
                        />
                        <line
                          y1="-0.5"
                          x2="24"
                          y2="-0.5"
                          transform="matrix(-1 7.15635e-08 1.06797e-07 1 35 21)"
                          stroke={isSticky ? "white" : "black"}
                        />
                        <circle
                          cx="4.5"
                          cy="4.5"
                          r="4.5"
                          transform="matrix(-1 0 0 1 40 16)"
                          fill={isSticky ? "white" : "black"}
                        />
                        <line
                          y1="-0.5"
                          x2="29"
                          y2="-0.5"
                          transform="matrix(1 0 0 -1 1 11)"
                          stroke={isSticky ? "white" : "black"}
                        />
                      </svg>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div
            className={`md:hidden z-[9999] fixed inset-0 transition-all duration-400 ease-in-out ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div
              className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className={`flex flex-col justify-between fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#000] px-[30px] py-[60px] sm:max-w-sm transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Logo type="mobile-navigation" activePage="service" />
                </Link>
                <button type="button" onClick={() => setIsMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="27" cy="21" r="5" fill="white" />
                    <path
                      d="M40 34L14 8M40 8L14 34"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col justify-center justify-between items-center">
                <div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative font-poppins text-[#fff] block text-[20px] leading-[60px] transition-colors duration-200 ${
                        item?.active
                          ? "font-[600] before:content-[''] before:block before:w-[50px] before:h-[1px] before:bg-[#E51D28] before:absolute before:top-0 before:left-0"
                          : "font-light"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  text="Get in touch"
                  variant="red"
                  mode="link"
                  href="/contacts"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <section className="mx-auto">
        <div className="pt-[63px] md:pt-[91px] pb-[86px] md:pb-[12px] pl-[25px] md:pl-[109px] 4xl:pl-[0] pr-[25px] md:pr-[75px] 4xl:pr-[0] xl:max-w-[1440px] xl:mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1 mt-[48px] md:mt-[0]">
              <div className="max-w-[480px] xl:max-w-[600px]">
                <Heading
                  as="h1"
                  className="Gilroy-Bold text-black text-[40px] leading-[40px] md:text-[50px] md:leading-[50px] font-bold tracking-[-0.01em] mb-[19px] md:mb-[16px] max-w-[480px]"
                >
                  {title}
                </Heading>
                <p className="text-[#000] text-[16px] leading-[22px] font-light tracking-normal font-poppins mb-[60px] md:mb-[43px] max-w-[446px]">
                  {description}
                </p>
                <div className="flex justify-start">
                  <Button
                    text="Process"
                    variant="red"
                    mode="link"
                    href="#process"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 mt-[0] md:mt-[47px] z-10 flex justify-end order-1 md:order-2">
              {icon && (
                <Image
                  src={buildImageUrl(icon?.url)}
                  width={550}
                  height={550}
                  alt="Web Development Icon"
                  className="h-full object-contain"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
        <div className="absolute rounded-full bg-[#E51D28] w-[336px] md:w-[630px] h-[336px] md:h-[630px] top-[40px] md:top-[unset] right-[-99px] md:right-[-40px] md:bottom-[-200px] blur-[85px] 4xl:blur-[120px] 4xl:right-[200px] 4xl:bottom-[-200px]" />
      </section>
    </div>
  );
};

export default ServiceHero;
