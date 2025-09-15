import SectionHeader from "../homepage/SectionHeader";
import Testimonials from "../homepage/Testimonials";
import ProcessSlider from "../ProcessSlider";
import Text from "../Text";
import { getClients } from "@/lib/fetchers/getClients";

export default async function ServiceSticky({ process }: { process: any[] }) {
  const clients: any[] = await getClients();
  return (
    <div className="max-w-[1440px] 2xl:max-w-full mx-auto m-h-[730px]">
      <div
        className="bg-[#F8F8F8] rounded-[35px] md:rounded-[40px]"
        style={{
          position: "sticky",
          top: "40px",
          marginTop: "100px",
          overflow: "hidden",
        }}
      >
        <Testimonials clients={clients} />
      </div>
      <div
        className="bg-[#000] rounded-[35px] md:rounded-[40px]"
        style={{
          position: "sticky",
          top: "40px",
          marginTop: "-197px",
          overflow: "hidden",
          zIndex: 101,
        }}
      >
        <div
          className="mx-auto max-w-[1140px] min-h-[730px] bg-black text-white py-12 md:py-[118px] rounded-[40px] 4xl:max-w-[1340px]"
          id="process"
        >
          <div className="px-6 md:px-[110px] xl:px-[0]">
            <SectionHeader title="Process" titleColor="#E51D28" />
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6 px-6 md:px-[110px]">
            <div className="col-span-12 md:col-start-5 md:col-end-[none]">
              <Text className="font-light text-[22px] leading-[30px]">
                We follow a structured and transparent approach to ensure every
                project is delivered with precision and efficiency. Explore our
                step-by-step process and see how we bring ideas to life.
              </Text>
            </div>
          </div>
          <div className="mt-[101px]">
            <ProcessSlider
              steps={process}
              primaryColor="#E51D28"
              secondaryColor="#000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
