"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Card from "./card";
import { Earth } from "lucide-react";
import { StaticImageData } from "next/image";

type InterfaceData = {
  title: string;
  value: string;
  decsrition: string;
  name: string;
  image: StaticImageData;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: InterfaceData[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<InterfaceData>(propTabs[0]);
  const [tabs, setTabs] = useState<InterfaceData[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(false);
  return (
    <div className="container flex justify-between">
      <div
        className={cn(
          "no-visible-scrollbar absolute left-0 top-32 z-[2] flex w-full max-w-full flex-col items-start justify-start overflow-auto pl-[3%] [perspective:1000px] sm:overflow-visible",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative z-10 rounded-full px-4 py-2", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                  damping: 8,
                }}
                className={cn(
                  "absolute left-4 z-30 h-8 w-8 rounded-full",
                  activeTabClassName,
                )}
              >
                <Earth className="h-8 w-8 animate-spin text-primary duration-5000" />
              </motion.div>
            )}
            <div className="relative h-8 w-8 rounded-2xl border-4 border-background text-black"></div>
          </button>
        ))}
      </div>
      <div className="h-[560px] w-full">
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("", contentClassName)}
        />
      </div>
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: InterfaceData[];
  active: InterfaceData;
  hovering?: boolean;
}) => {
  const isActive = (tab: InterfaceData) => {
    return tab.value === tabs[0].value;
  };
  return (
    <motion.div
      className="relative w-full"
      key={tabs[0].value}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        duration: 3.5,
      }}
    >
      {tabs.map((tab, idx) => {
        const isActived = isActive(tab);
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={
              {
                // zIndex: isActived ? 10 : -idx,
              }
            }
            initial={{
              top: -idx * 10,
              zIndex: -idx,
              opacity: 1,
              y: -idx * 10,
              x: idx * 15,
            }}
            animate={{
              top: isActived ? 0 : -idx * 10,
              zIndex: isActived ? 10 : -idx,
              opacity: isActived ? [0.9, 1] : [0.9, 1],
              y: isActived ? 0 : -idx * 10,
              x: isActived ? 0 : idx * 15,
            }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.1,
            }}
            className={cn("absolute left-0 top-0 h-fit w-fit", className)}
          >
            {/* {tab.content} */}
            <div className="h-fit w-fit rounded-sm border-[6px] border-background bg-white">
              <Card tab={tab} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
