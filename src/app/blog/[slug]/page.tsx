import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/privacy-policy/Section";
import InnerPageHero from "@/components/heros/InnerPageHero";
import Heading from "@/components/Heading";
import BlogPostCard from "@/components/blog/BlogPostCard";
import theRoleOfPoC from "@/assets/the-role-of-poc.jpg";
import upgradeLegacySystem from "@/assets/upgrade-legacy-system.jpg";
import customWebsite from "@/assets/custom-website.jpg";
import mobileTrends from "@/assets/mobile-trends.jpg";
import kubernetesGateway from "@/assets/kubernetes-gateway.jpg";
import diagramElkjs from "@/assets/diagram-elkjs.jpg";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
}
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

// This would typically come from an API or CMS
const getBlogPost = (slug: string): BlogPost | null => {
  // Mock data - replace with actual data fetching
  const posts: Record<string, BlogPost> = {
    "upgrade-legacy-system": {
      title: "How to Upgrade Your Legacy System",
      content: `
        <p>Legacy system modernization is a critical process for businesses looking to stay competitive in today's digital landscape. Here's what you need to know about upgrading your legacy systems effectively.</p>
        <p>First, assess your current system's limitations and identify key areas that need improvement. This includes evaluating performance bottlenecks, security vulnerabilities, and maintenance costs.</p>
        <p>Next, develop a comprehensive modernization strategy that aligns with your business objectives. Consider factors such as scalability, integration capabilities, and future technological requirements.</p>
        <p>Finally, implement the upgrade in phases to minimize disruption to your business operations. Regular testing and monitoring ensure a smooth transition to the modernized system.</p>
      `,
      date: "March 20, 2024",
      author: "John Smith",
    },
  };

  return posts[slug] || null;
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <InnerPageHero
        title="The role of proof of concept in product development"
        category="Software development"
        author="John Smith"
        position="Software Engineer"
        date="March 20, 2024"
        readTime="5 min read"
        description="If you’re having a digital product developed for the first time, proof of concept may seem like a redundant step you don’t want to invest in. However, the more seasoned you are in product development, the more you understand the value of validating your idea before investing. The reality is that proof of concept is oftentimes the difference between product success and product failure. Whether you’re a start-up looking for funding or you’re a corporation looking to invest in digital transformation, proof of concept will save you loads of money and stress. "
      />
      <div className="flex gap-[28px] flex-wrap max-w-[1140px] mx-auto justify-end ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <div className="w-full max-w-[718px]">
          <div className="h-[235px] md:h-[509px] bg-[#8f8f8f] rounded-[35px]">
            {theRoleOfPoC && (
              <Image
                src={theRoleOfPoC}
                alt="The role of proof of concept"
                className="rounded-[35px]"
                style={{
                  width: "100%",
                }}
              />
            )}
          </div>
          <h2 className="font-poppins text-[18px] leading-[22px] font-[600] mt-[64px] text-[#E51D28]">
            What are some examples of Proof of Concept?
          </h2>
          <p className="font-[300] text-[16px] leading-[22px] mt-[24px]">
            Proof of concept is a simple version of your digital product that
            aims to demonstrate different features of your product overall and
            its core functionality so you can validate your idea, identify
            issues and address them early on and save precious time and
            resources.  
          </p>
          <p className="font-[300] text-[16px] leading-[22px] mt-[24px]">
            Here, at Perspective Unity, we engage in proof of concept throughout
            the whole product development cycle to boost efficiency and ensure a
            higher quality of the final product:
          </p>
          <h3 className="font-[600] text-[18px] leading-[22px] mt-[24px]">
            Proof of Concept Testing
          </h3>
          <p className="font-[300] text-[16px] leading-[22px]">
            Proof of concept testing allows us to test a specific feature or
            functionality of the software to determine its feasibility. We use
            it to identify potential issues and determine whether a specific
            feature or functionality is viable. For example, our team regularly
            conducts proof of concept tests to determine whether a particular
            algorithm or machine learning model is effective in solving a
            particular problem.
          </p>
          <h3 className="font-[600] text-[18px] leading-[22px] mt-[24px]">
            Integration Testing
          </h3>
          <p className="font-[300] text-[16px] leading-[22px]">
            We engage in integration testing when we need to test how different
            components of the software we’re building work together. For
            example, our development team would run integration tests to ensure
            that a payment gateway integrates smoothly with the rest of the
            software.
          </p>

          <h2 className="font-poppins text-[18px] leading-[22px] font-[600] mt-[64px] text-[#E51D28]">
            Why is Proof of Concept important to your business?
          </h2>
          <p className="font-[300] text-[16px] leading-[22px] mt-[24px]">
            Let’s face it, product development is a costly and time-consuming
            venture for any business. You want to make sure your investment is
            well worth it and your digital product will deliver ROI. This is
            exactly what proof of concept allows you to demonstrate before
            you’ve invested heavily in your idea. Here’s why proof of concept is
            critical:
          </p>
          <h3 className="font-[600] text-[18px] leading-[22px] mt-[24px]">
            1. Reduced Costs
          </h3>
          <p className="font-[300] text-[16px] leading-[22px]">
            Removing issues late into development is a lot more costly than
            dealing with them early on. Proof of concept ensures that your
            resources are used efficiently, reducing the risk of wasted time and
            money.
          </p>
          <h3 className="font-[600] text-[18px] leading-[22px] mt-[24px]">
            2. Shorter Time-to-Market 
          </h3>
          <p className="font-[300] text-[16px] leading-[22px]">
            Identifying potential risks and flaws and addressing them early on
            also means a shorter time-to-market reducing the risk of missed
            opportunities and lost revenue.
          </p>
          <h3 className="font-[600] text-[18px] leading-[22px] mt-[24px]">
            3. Higher Chances of Success
          </h3>
          <p className="font-[300] text-[16px] leading-[22px]">
            By testing a small-scale version of your software, we gather
            valuable feedback from users and incorporate the insight and
            suggestions into the final product. Doing so helps us boost customer
            satisfaction and improve the chances of success in the market.
          </p>
          <p className="font-[300] text-[16px] leading-[22px]">
            Proof of concept (PoC) is critical to the success of your product as
            it helps you to validate your idea, identify potential issues,
            reduce risk and ensure that resources are used efficiently. It is
            essential to choose the right type of PoC based on the nature of
            your digital product and the goals of the development process. Get
            in touch with our expert team here so we can help and advise you on
            the best approach. 
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[1140px] mt-[147px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <Heading
          as="h2"
          className="font-[700] text-[50px] leading-[50px] tracking-[-0.01em]"
        >
          Related posts
        </Heading>
        <div className="mt-[80px] md:mt-[102px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[41px] gap-y-[66px] md:gap-y-[107px]">
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
    </div>
  );
}
