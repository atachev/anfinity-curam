import Image from "next/image";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import InnerPageHero from "@/components/heros/InnerPageHero";
import Heading from "@/components/Heading";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/fetchers/getBlog";
import { buildImageUrl, getFormattedReadingTime } from "@/lib/utils";
import markdownRender from "../../../utils/markdownRender";
import styles from "../../styles/blog.module.css";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  shortDescription: string;
}

function JsonLd({ post, slug }: { post: BlogPost; slug: string }) {
  const base = "https://anfinity.bg";
  const canonical = `${base}/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.shortDescription,
    url: canonical,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "anfinity",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.png`,
      },
    },
    datePublished: post.date || new Date().toISOString(),
    dateModified: post.date || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getBlogPostBySlug(params.slug);
  const currentPost = postData[0];

  if (!currentPost) {
    notFound();
  }
  const postContent = await markdownRender(currentPost.content);

  const categoryName = currentPost.categories[0]?.name;
  const excludeId = currentPost.documentId ?? currentPost.id;
  const relatedPostsRaw =
    categoryName != null && excludeId != null
      ? await getRelatedBlogPosts(categoryName, excludeId)
      : [];

  const relatedPosts = Array.isArray(relatedPostsRaw) ? relatedPostsRaw : [];

  return (
    <div>
      <JsonLd post={currentPost} slug={params.slug} />
      <InnerPageHero
        title={currentPost.title}
        category={currentPost.categories
          ?.map((category: any) => category.name)
          .join(", ")}
        author={currentPost.author?.name}
        position={currentPost.author?.position}
        date={dayjs(currentPost.createdAt).format("MMMM DD, YYYY")}
        readTime={getFormattedReadingTime(currentPost.content)}
        description={currentPost.description}
      />
      <div className="flex gap-[28px] flex-wrap max-w-[1140px] mx-auto justify-end ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <div className="w-full max-w-[718px]">
          <div className="h-[235px] md:h-[509px] bg-[#8f8f8f] rounded-[35px] md:rounded-[40px] relative">
            {(() => {
              const cover = currentPost.cover;
              const coverUrl = cover?.url;
              if (!coverUrl) return null;
              return (
                <Image
                  quality={100}
                  unoptimized={true}
                  fill
                  src={buildImageUrl(coverUrl)}
                  alt={currentPost.title ?? "Blog post cover"}
                  className="rounded-[35px] object-cover"
                  style={{
                    width: "100%",
                  }}
                />
              );
            })()}
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
        </div>
      </div>
      {relatedPosts.length > 0 && (
        <div className="flex flex-col max-w-[1140px] mt-[147px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
          <Heading
            as="h2"
            className="font-[700] text-[50px] leading-[50px] tracking-[-0.01em]"
          >
            Related posts
          </Heading>
          <div className="mt-[80px] md:mt-[102px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[41px] gap-y-[66px] md:gap-y-[107px]">
            {relatedPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                categories={post.categories}
                title={post.title}
                description={post.shortDescription}
                readTime={getFormattedReadingTime(post.content)}
                image={post.cover}
                href={post.href}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
