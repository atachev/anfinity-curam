import Button from "@/components/Button";
import Text from "@/components/Text";
import ErrorIcon from "./components/icons/ErrorIcon";

export const metadata = {
  title: "Page Not Found | anfinity",
  robots: "noindex, nofollow",
  description: "The page you're looking for doesn't exist or was moved.",
  openGraph: {
    title: "Page Not Found | anfinity",
    description: "The page you're looking for doesn't exist or was moved.",
  },
};

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pt-[32px] md:pt-[231px] md:pb-[212px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]">
        <div>
          <ErrorIcon className="w-full" />
        </div>
        <div className="md:mt-[123px]">
          <Text className="font-light text-[22px] leading-[30px]">
            The page you were looking for could not be found!
          </Text>
          <div className="mt-[63px] md:mt-[77px]">
            <Button text="Go back" mode="link" href="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
