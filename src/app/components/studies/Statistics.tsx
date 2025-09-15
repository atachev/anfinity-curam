interface StatisticsProps {
  value: string;
  description: string;
}

const Statistics = ({ value, description }: StatisticsProps) => {
  return (
    <div className="flex flex-col gap-[9px] max-w-[1140px] mx-auto">
      <div>
        <span className="Gilroy-Bold text-[50px] leading-[50px] tracking-[-0.01em] text-[#000]">
          {value}
        </span>
      </div>
      <div>
        <p className="font-poppins text-[18px] leading-[30px] font-[300] tracking-[0] m-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
