import { type FC, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({
  as: Component = "h1",
  className,
  children,
  ...props
}) => {
  const baseStyles = "text-gray-900 dark:text-gray-100 Gilroy-Bold";

  return (
    <Component className={cn(baseStyles, className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
