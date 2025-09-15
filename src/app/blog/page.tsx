"use client";

import FeaturedCard from "@/components/blog/FeaturedCard";
import ListingPageHero from "@/components/heros/ListingPageHero";
import SearchIcon from "@/components/icons/SearchIcon";
import { useState, useEffect } from "react";
import BlogPostCard from "@/components/blog/BlogPostCard";
import theRoleOfPoC from "@/assets/the-role-of-poc.jpg";
import developmentForStartups from "@/assets/development-for-startups.jpg";
import upgradeLegacySystem from "@/assets/upgrade-legacy-system.jpg";
import customWebsite from "@/assets/custom-website.jpg";
import mobileTrends from "@/assets/mobile-trends.jpg";
import kubernetesGateway from "@/assets/kubernetes-gateway.jpg";
import diagramElkjs from "@/assets/diagram-elkjs.jpg";

type Category =
  | "All articles"
  | "News"
  | "Software development"
  | "Mobile"
  | "Web development"
  | "Trends"
  | "Artificial intelligence"
  | "PoC & MVP"
  | "Startups";

interface CategoryCount {
  name: Category;
  count: number;
}

const categories: CategoryCount[] = [
  { name: "All articles", count: 71 },
  { name: "News", count: 3 },
  { name: "Software development", count: 12 },
  { name: "Mobile", count: 7 },
  { name: "Web development", count: 26 },
  { name: "Trends", count: 11 },
  { name: "Artificial intelligence", count: 8 },
  { name: "PoC & MVP", count: 3 },
  { name: "Startups", count: 1 },
];

const blogPosts = [
  {
    category: "News",
    title:
      "How to upgrade your legacy system for improved performance and efficiency",
    description:
      "Legacy systems refer to outdated software that may still be in use within an organisation. These systems, although functional, often face several challenges due to their old-fashioned nature.",
    readTime: "4 min. read",
    image: upgradeLegacySystem,
    href: "/blog/upgrade-legacy-system",
  },
  {
    category: "News",
    title:
      "Why developing a custom website or product is better than using a template",
    description:
      "For entrepreneurs who want to scale their businesses quickly and effectively, developing a custom website or product is often a better option than using a template.",
    readTime: "4 min. read",
    image: customWebsite,
    href: "/blog/custom-vs-template",
  },
  {
    category: "Trends",
    title: "Mobile app development trends 2025",
    description:
      "To gain a competitive edge in the ever-evolving world of mobile app development, businesses and entrepreneurs must stay in the loop of the latest trends.",
    readTime: "4 min. read",
    image: mobileTrends,
    href: "/blog/mobile-trends-2025",
  },
  {
    category: "Web development",
    title: "Kubernetes Gateway API in GKE, Contour, and NGINX Implementations",
    description:
      "This article explains Gateway API - a relatively recent yet impressively powerful technology that is called the way to “evolve” the Kubernetes network.",
    readTime: "4 min. read",
    image: kubernetesGateway,
    href: "/blog/mobile-trends-2025",
  },
  {
    category: "Web development",
    title: "Building a simple diagram by using Elkjs and React Flow",
    description:
      "In this article, we will look at the process of building a diagram with the help of Elkjs and React Flow libraries. We hope our tutorial will be useful for you and will shed some light on using React Flow and Elksj.",
    readTime: "4 min. read",
    image: diagramElkjs,
    href: "/blog/mobile-trends-2025",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All articles");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <ListingPageHero
        title="These are some of the topics on our minds"
        description="Have a read and discover insights on software products, product features, and digital solutions that work for different scenarios and organisational needs."
        textColor="#E51D28"
      />
      <div className="max-w-[1140px] mx-auto bg-[#F8F8F8] rounded-[35px] px-[28px] md:px-[66px] pt-[51px] pb-[69px] md:py-[64px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <div className="w-full max-w-[428px] relative mb-12">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={
              "flex h-10 w-full border-b-[1px] py-[10px] outline-none pr-[50px] border-[#D5D5D5] focus:border-[#E51D28] transition-colors duration-300 font-poppins font-light text-base leading-[22px] tracking-[0%] bg-transparent"
            }
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`group inline-flex pt-[14px] pr-[20px] pb-[17px] pl-[34px] rounded-full transition-all duration-300 cursor-pointer
                ${
                  activeCategory === category.name
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-[#E51D28] hover:text-white"
                }
                font-poppins font-light text-base leading-[100%] tracking-[0%]
              `}
            >
              <span>{category.name}</span>
              <span className={`ml-[6px] mt-[-6px] font-poppins font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8F8F8F] ${
                  activeCategory === category.name
                    ? "group-hover:text-[#8F8F8F]"
                    : "group-hover:text-[#fff]"
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-[78px] md:mt-[135px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <FeaturedCard
          category="PoC & MVP"
          title="The role of proof of concept in product development"
          description="If you’re having a digital product developed for the first time, proof
          of concept may seem like a redundant step you don’t want to invest in.
          However, the more seasoned you are in product development, the more
          you understand the value of validating your idea before investing."
          href="/blog/upgrade-legacy-system"
          image={theRoleOfPoC}
        />
        <FeaturedCard
          category="Startup"
          title="Why end-to-end product development is crucial for startup success"
          description="Startups face numerous challenges in today's competitive business landscape. One of the crucial factors for their success lies in their ability to develop high-quality products efficiently and effectively."
          href="/blog/upgrade-legacy-system"
          image={developmentForStartups}
        />
      </div>
      <div className="max-w-[1140px] mx-auto mt-[66px] md:mt-[142px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[41px] gap-y-[66px] md:gap-y-[107px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            category={post.category}
            title={post.title}
            description={post.description}
            readTime={post.readTime}
            image={post.image}
            href={post.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
