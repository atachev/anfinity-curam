import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../../types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={post.link} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">{post.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-anf-primary-red transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-anf-primary-red font-medium">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
