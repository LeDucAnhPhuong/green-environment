"use client";
import { cn } from "@/lib/utils";
import { Earth, EarthIcon, EarthLock, EarthLockIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
function Title({
  align = "center",
  title,
  subtitle,
  className,
}: {
  align?: "center" | "left";
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-[600px] flex-col",
        align === "left" ? "items-start" : "items-center",
        align === "center" && "mx-auto",
        className,
      )}
    >
      <div
        className={cn(
          "relative mb-2 flex items-center gap-2 overflow-hidden rounded-full py-1 pl-2 pr-3",
          "after:rounded-tr-0 after:rounded-br-0 after:absolute after:z-[-10] after:h-[40px] after:w-[20px] after:-translate-x-[8px] after:rounded-bl-[150px] after:rounded-tl-[150px] after:bg-background after:content-['']",
        )}
      >
        <motion.span
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100%",
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-primary/40"
        ></motion.span>
        <Earth className="animate-spin text-primary duration-5000" />
        <span className="text-base font-bold uppercase text-primary">
          {subtitle}
        </span>
      </div>
      <motion.h3
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.25,
        }}
        viewport={{
          once: true,
        }}
        className={cn(
          "font-title text-5xl font-semibold leading-tight",
          align === "center" && "text-center",
        )}
      >
        {title}
      </motion.h3>
    </div>
  );
}

export default Title;
