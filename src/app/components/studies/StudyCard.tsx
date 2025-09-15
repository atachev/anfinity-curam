import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/Arrow";
import { buildImageUrl } from "@/lib/utils";

type Props = {
  project: any;
  isEven: boolean;
};

const StudyCard = ({ project, isEven }: Props) => {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      style={{
        cursor: "pointer",
      }}
      className="block group"
    >
      <div className="rounded-[35px] md:rounded-[40px] overflow-hidden">
        {project?.coverImage && (
          <Image
            quality={100}
            unoptimized={true}
            src={buildImageUrl(project?.coverImage?.url)}
            alt={project.title}
            width={400}
            height={300}
            className={`w-full ${
              isEven ? "max-h-auto" : "max-h-[502px]"
            } object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-[1.05]`}
          />
        )}
      </div>
      <span className="text-[#8F8F8F] font-poppins font-normal text-base leading-[24px] tracking-[0%] mt-[29px] block">
        {project.category}
      </span>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
        className="Gilroy-Bold font-[700] text-[30px]/[35px] tracking-[-1px] mt-[9px]"
      >
        {project.title}
      </h2>
      <div
        style={{
          marginTop: "36px",
        }}
      >
        <Arrow color="#000" />
      </div>
    </Link>
  );
};

export default StudyCard;
