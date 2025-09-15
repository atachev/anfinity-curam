const Arrow = ({ color }: { color: string }) => {
  return (
    <div className="flex items-center">
      <div
        className="w-[14px] h-[14px] rounded-full"
        style={{ backgroundColor: color ? color : "#E51D28" }}
      />
      <div className="flex items-center relative">
        <div
          className="h-[1px] w-[97px] transition-all duration-500 ease-in-out group-hover:w-[39px]"
          style={{ backgroundColor: color ? color : "#E51D28" }}
        />
        <svg
          className="absolute right-[-1px]"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 1" stroke={color ? color : "#E51D28"} />
        </svg>
      </div>
    </div>
  );
};

export default Arrow;
