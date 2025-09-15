import { type FC, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export type TextVariant =
  | "base-normal"
  | "medium-light"
  | "medium-normal"
  | "lg-bold"
  | "xl-normal";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

const Text: FC<TextProps> = ({
  variant = "base-normal",
  className,
  children,
  dangerouslySetInnerHTML,
  ...props
}) => {
  const baseStyles = `${poppins.className} leading-[27px]`;

  const variantStyles = {
    "base-normal": "text-sm font-normal",
    "medium-light": "text-base font-light",
    "medium-normal": "text-base font-normal",
    "lg-bold": "text-lg md:text-xl font-bold",
    "xl-normal": "text-xl md:text-2xl font-normal",
  };

  const Component = dangerouslySetInnerHTML ? "div" : "p";

  if (dangerouslySetInnerHTML) {
    return (
      <Component
        className={cn(baseStyles, variantStyles[variant], className)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        {...props}
      />
    );
  }

  return (
    <Component
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
