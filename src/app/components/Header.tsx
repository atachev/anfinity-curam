"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import Logo from "./Logo";
import Button from "./Button";

type ActivePage =
  | "home"
  | "services"
  | "service"
  | "case-studies"
  | "case-study"
  | "about-us"
  | "blog"
  | "blog-post"
  | "contacts"
  | "cookie-policy"
  | "privacy-policy"
  | "error-page";

type ButtonVariant = "white" | "black" | "red";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isServicesPage = pathname === "/services";
  const isServicePage = pathname.includes("/services/");
  const isCaseStudiesPage = pathname === "/case-studies";
  const isBlogPage = pathname === "/blog";
  const isContactsPage = pathname === "/contacts";
  const isPrivacyPolicyPage = pathname === "/privacy-policy";
  const isCookiePolicyPage = pathname === "/cookie-policy";
  const isBlogPostPage = pathname.includes("/blog/");
  const isCaseStudyPage = pathname.includes("/case-studies/");

  const getActivePage = useCallback(() => {
    if (isHomePage) return "home";
    if (isServicesPage) return "services";
    if (isServicePage) return "service";
    if (isCaseStudiesPage) return "case-studies";
    if (pathname === "/about") return "about-us";
    if (isBlogPage) return "blog";
    if (isContactsPage) return "contacts";
    if (isPrivacyPolicyPage) return "privacy-policy";
    if (isCookiePolicyPage) return "cookie-policy";
    if (isBlogPostPage) return "blog";
    if (isCaseStudyPage) return "case-studies";
    return "error-page";
  }, [pathname]);

  const getHeaderClassName = () => {
    if (isSticky) {
      return "bg-[#000] rounded-[200px]";
    } else if (isHomePage && !isSticky) {
      return "header-bg-red w-[100%] mx-auto rounded-t-[35px] md:rounded-t-[40px]";
    } else if (isContactsPage) {
      return "bg-[#000] w-[100%] mx-auto rounded-t-[35px] md:rounded-t-[40px]";
    } else if (isServicePage) {
      return "bg-[#F5F5F5] w-[100%] mx-auto rounded-t-[40px]";
    } else if (
      isServicesPage ||
      isCaseStudiesPage ||
      isBlogPage ||
      isBlogPostPage ||
      isCaseStudyPage ||
      isCookiePolicyPage ||
      isPrivacyPolicyPage
    ) {
      return "bg-black w-[100%] mx-auto rounded-[200px] md:rounded-[57.5px]";
    } else {
      return "header-bg-red w-[100%] mx-auto rounded-[200px] md:rounded-[57.5px]";
    }
  };

  const getButtonVariant = (): ButtonVariant => {
    if (isSticky && isHomePage) return "red";
    if (isHomePage) return "black";
    if (isServicesPage) return "red";
    if (isServicePage) return "red";
    if (isCaseStudiesPage) return "white";
    if (isCaseStudyPage) return "white";
    if (isBlogPage) return "red";
    if (isContactsPage) return "red";
    if (isPrivacyPolicyPage) return "red";
    if (isBlogPostPage) return "red";
    if (isCookiePolicyPage) return "red";
    return "white";
  };

  const getMobileNavigationButtonColor = (): ButtonVariant => {
    if (isSticky) return "white";
    if (isHomePage) return "black";
    if (isServicesPage) return "white";
    if (isServicePage) return "black";
    if (isCaseStudiesPage) return "white";
    if (isCaseStudyPage) return "white";
    if (isBlogPage) return "white";
    if (isContactsPage) return "white";
    if (isPrivacyPolicyPage) return "white";
    if (isBlogPostPage) return "white";
    if (isCookiePolicyPage) return "white";
    return "white";
  };

  const navigation = useMemo(
    () => [
      {
        name: "Services",
        href: "/services",
        active: getActivePage() === "services" || getActivePage() === "service",
      },
      {
        name: "Case studies",
        href: "/case-studies",
        active: getActivePage() === "case-studies",
      },
      // {
      //   name: "About Us",
      //   href: "/about-us",
      //   active: getActivePage() === "about-us",
      // },
      // { name: "Blog", href: "/blog", active: getActivePage() === "blog" },
    ],
    [getActivePage]
  );

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  if (isServicePage && isMobile) {
    return null;
  }

  return (
    <>
      <div
        className={`rounded-t-[40px] ${
          isSticky ? "h-[85px] md:h-[105px]" : "h-0"
        } ${getActivePage() === "home" ? "bg-[#E51D28]" : ""}`}
      />
      <div
        className={`${
          isSticky
            ? "fixed top-[40px] left-0 right-0 z-[9999] transform translate-y-0"
            : "relative w-full"
        } transition-transform duration-300`}
      >
        <div
          className={`mx-auto ${
            isSticky
              ? "md:[width:calc(100%-80px)] [width:calc(100%-10px)]"
              : "w-full"
          }`}
        >
          <div className={`${getHeaderClassName()}`}>
            <nav
              className="w-full flex items-center justify-between pt-[25px] md:pt-[32px] pb-[25px] md:pb-[35px] pl-[25px] md:pl-[50px] pr-[25px] md:pr-[52px]"
              aria-label="Global"
            >
              <div className="flex items-center">
                <Link href="/" aria-label="Home">
                  <Logo
                    type="navigation"
                    isSticky={isSticky}
                    activePage={getActivePage()}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative ${
                        isServicePage && isSticky
                          ? "text-white hover:text-white/80"
                          : isServicePage && !isSticky
                          ? "text-black hover:text-black/50"
                          : "text-white hover:text-white/80"
                      } transition-colors ${
                        item?.active
                          ? "font-[600] before:content-[''] before:block before:w-[45px] before:h-[1px] before:bg-[#E51D28] before:absolute before:top-[-9px] before:left-0"
                          : "font-light"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="ml-[39px]">
                  <Button
                    text="Get in touch"
                    variant={getButtonVariant()}
                    mode="link"
                    href="/contacts"
                  />
                </div>
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
                      stroke={getMobileNavigationButtonColor()}
                    />
                    <line
                      y1="-0.5"
                      x2="24"
                      y2="-0.5"
                      transform="matrix(-1 7.15635e-08 1.06797e-07 1 35 21)"
                      stroke={getMobileNavigationButtonColor()}
                    />
                    <circle
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      transform="matrix(-1 0 0 1 40 16)"
                      fill={getMobileNavigationButtonColor()}
                    />
                    <line
                      y1="-0.5"
                      x2="29"
                      y2="-0.5"
                      transform="matrix(1 0 0 -1 1 11)"
                      stroke={getMobileNavigationButtonColor()}
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
              <Logo type="mobile-navigation" activePage={getActivePage()} />
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
  );
};

export default Header;
