import Link from "next/link";

type Props = {
  text: string;
  variant?: "black" | "red" | "white";
  type?: any;
  onClick?: () => void;
  href?: string;
  mode?: "button" | "link";
};

const Button = ({
  text,
  variant,
  type,
  onClick,
  href,
  mode = "button",
}: Props) => {
  const textColor =
    variant === "black" ? "white" : variant === "white" ? "black" : "white";
  const borderColor =
    variant === "black" ? "black" : variant === "white" ? "white" : "#E51D28";

  const backgroundColor =
    variant === "black" ? "#000" : variant === "white" ? "#fff" : "#E51D28";

  const buttonContent = (
    <>
      <div
        style={{
          borderColor: borderColor,
        }}
        className={`absolute -right-6 border border-solid rounded-full w-full h-full transition-all duration-300 ease-in-out group-hover:right-0`}
      ></div>
      <div
        style={{
          borderColor: borderColor,
        }}
        className={`absolute -right-3 border border-solid rounded-full w-full h-full transition-all duration-300 ease-in-out group-hover:right-0`}
      ></div>

      <div
        style={{ border: "none", background: backgroundColor }}
        className={`relative z-10 rounded-full py-[11px] pl-[51px] pr-[49px] pb-[14px] `}
      >
        <span
          className={`font-poppins text-[16px] font-[400] leading-none tracking-normal text-${textColor}`}
        >
          {text}
        </span>
      </div>
    </>
  );

  if (mode === "link" && href) {
    return (
      <Link
        href={href}
        className="relative inline-block group"
        style={{ color: textColor }}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={{
        cursor: "pointer",
        color: textColor,
      }}
      className="relative inline-block group"
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
