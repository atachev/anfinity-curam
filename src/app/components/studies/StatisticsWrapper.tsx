"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Statistics from "./Statistics";

const StatisticsWrapper = ({ metrics }: { metrics: any[] }) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-6 gap-[30px] max-w-[1140px] mt-[112px] md:mt-[151px] ml-[25px] md:ml-[auto] mr-[25px] md:mr-[auto]"
    >
      {metrics?.map((metric, index) => (
      <div className="col-span-3 md:col-span-1" key={index}>
        <Statistics value={metric.value} description={metric.name} />
      </div>
      ))}
      {/* <div className="col-span-3 md:col-span-1">
        <Statistics value="-30%" description="Team score" />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Statistics value="1,5M" description="Usage" />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Statistics value="15%" description="Growth" />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Statistics value="-30%" description="Team score" />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Statistics value="-30%" description="Team score" />
      </div> */}
    </motion.div>
  );
};

export default StatisticsWrapper;
