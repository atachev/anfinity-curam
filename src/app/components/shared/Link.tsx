import Link from "next/link";

type Props = {
  text: string;
  href: string;
  variant?: "black" | "red" | "white";
};

const LinkButton = ({ text, href, variant = "black" }: Props) => {
  const bgColor =
    variant === "black"
      ? "bg-black text-white"
      : variant === "red"
      ? "bg-red-600 text-white"
      : "bg-white text-black border border-black";

  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center"
    >
      <div className="absolute -right-6 border border-black rounded-full w-full h-full"></div>
      <div className="absolute -right-3 border border-black rounded-full w-full h-full"></div>
      <div
        className={`relative z-10 ${bgColor} rounded-full pt-[11px] pb-[14px] pl-[51px] pr-[49px] text-[16px] font-[400] font-gilroy`}
        style={{ border: "none" }}
      >
        {text}
      </div>
    </Link>
  );
};

export default LinkButton;
