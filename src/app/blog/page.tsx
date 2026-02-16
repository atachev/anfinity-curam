"use client";

import { useState, useEffect } from "react";
import { getFormattedReadingTime } from "@/lib/utils";
import ListingPageHero from "@/components/heros/ListingPageHero";
import SearchIcon from "@/components/icons/SearchIcon";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getBlogCategories, getBlogPosts } from "@/lib/fetchers/getBlog";
import FeaturedCard from "@/components/blog/FeaturedCard";

function JsonLd(posts: any) {
  const base = "https://anfinity.bg";
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog",
    url: `${base}/blog`,
    description:
      "Have a read and discover insights on software products, product features, and digital solutions that work for different scenarios and organisational needs.",
    publisher: {
      "@type": "Organization",
      name: "anfinity",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.png`,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${base}/blog`,
        },
      ],
    },
  };

  if (posts?.length) {
    jsonLd.blogPost = posts.map((post: any) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.shortDescription,
      url: `${base}/${post.slug}`,
      author: {
        "@type": "Organization",
        name: "anfinity",
      },
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type CategoryWithCount = { name: string; count: number };

type BlogPostCardItem = {
  cover: string;
  categories: Array<any>;
  title: string;
  description: string;
  shortDescription: string;
  readTime: string;
  image: string;
  href: string;
  slug: string;
  content: string;
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogCategories, setBlogCategories] = useState<CategoryWithCount[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPostCardItem[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPostCardItem[]>([]);

  useEffect(() => {
    getBlogCategories().then(
      (data: { name: string; count?: number; blogs?: unknown[] }[]) => {
        if (!data?.length) return;
        const count = (c: { count?: number; blogs?: unknown[] }) =>
          c.count ?? c.blogs?.length ?? 0;
        const rest = data.filter((c) => c.name !== "All articles");
        setBlogCategories([
          {
            name: "All articles",
            count: rest.reduce((sum, c) => sum + count(c), 0),
          },
          ...rest.map((c) => ({ name: c.name, count: count(c) })),
        ]);
      },
    );
    getBlogPosts().then((data: any[]) => {
      setBlogPosts(data);
      setFeaturedPosts(data.filter(d=>d.featured));
    });
  }, []);

  return (
    <div>
      <JsonLd posts={blogPosts} />
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
          {blogCategories.map((category) => (
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
              <span
                className={`ml-[6px] mt-[-6px] font-poppins font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8F8F8F] ${
                  activeCategory === category.name
                    ? "group-hover:text-[#8F8F8F]"
                    : "group-hover:text-[#fff]"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-[78px] md:mt-[135px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        {featuredPosts.map((post, index) => (
          <FeaturedCard
            key={index}
            category={post.categories?.map((category: any) => category.name).join(", ")}
            title={post.title}
            description={post.description}
            timeToRead={getFormattedReadingTime(post.content)}
            image={post.cover}
            href={post.slug}
          />
        ))}
      </div>
      <div className="max-w-[1140px] mx-auto mt-[66px] md:mt-[142px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[41px] gap-y-[66px] md:gap-y-[107px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            categories={post.categories}
            title={post.title}
            description={post.shortDescription}
            readTime={getFormattedReadingTime(post.content)}
            image={post.cover}
            href={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
