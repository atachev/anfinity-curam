"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import DesktopSlider from "./process-slider/Desktop";
import MobileSlider from "./process-slider/Mobile";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  theme: any;
}

// const steps: ProcessStep[] = [
//   {
//     id: "01",
//     title: "Competitive analysis",
//     description:
//       "Work in short sprints, continually refining the domain model based on feedback and new insights from stakeholders.",
//     theme: {
//       titleColor: "#FF7F11",
//       actionsColor: "#FF7F11",
//       timelineColor: "#FF7F11",
//       card: {
//         numberColor: "#FF7F11",
//         textColor: "#fff",
//         textColorHover: "#000",
//         background: "#fff",
//       },
//     },
//   },
//   {
//     id: "02",
//     title: "Iterative development",
//     description:
//       "Work in short sprints, continually refining the domain model based on feedback and new insights from stakeholders.",
//     theme: {
//       titleColor: "#FF7F11",
//       actionsColor: "#FF7F11",
//       timelineColor: "#FF7F11",
//       card: {
//         numberColor: "#FF7F11",
//         textColor: "#fff",
//         textColorHover: "#000",
//         background: "#fff",
//       },
//     },
//   },
//   {
//     id: "03",
//     title: "Continuous integration",
//     description:
//       "Work in short sprints, continually refining the domain model based on feedback and new insights from stakeholders.",
//     theme: {
//       titleColor: "#FF7F11",
//       actionsColor: "#FF7F11",
//       timelineColor: "#FF7F11",
//       card: {
//         numberColor: "#FF7F11",
//         textColor: "#fff",
//         textColorHover: "#000",
//         background: "#fff",
//       },
//     },
//   },
//   {
//     id: "04",
//     title: "Refactoring & improvement",
//     description:
//       "Work in short sprints, continually refining the domain model based on feedback and new insights from stakeholders.",
//     theme: {
//       titleColor: "#FF7F11",
//       actionsColor: "#FF7F11",
//       timelineColor: "#FF7F11",
//       card: {
//         numberColor: "#FF7F11",
//         textColor: "#fff",
//         textColorHover: "#000",
//         background: "#fff",
//       },
//     },
//   },
//   {
//     id: "05",
//     title: "Final improvements",
//     description:
//       "Work in short sprints, continually refining the domain model based on feedback and new insights from stakeholders.",
//     theme: {
//       titleColor: "#FF7F11",
//       actionsColor: "#FF7F11",
//       timelineColor: "#FF7F11",
//       card: {
//         numberColor: "#FF7F11",
//         textColor: "#000",
//         textColorActive: "#000",
//         background: "#fff",
//       },
//     },
//   },
// ];

const ProcessSlider = ({
  steps,
  primaryColor,
  secondaryColor,
}: {
  steps: any[];
  primaryColor: string;
  secondaryColor: string;
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <MobileSlider
          steps={steps}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ) : (
        <DesktopSlider
          steps={steps}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      )}
    </>
  );
};

export default ProcessSlider;
