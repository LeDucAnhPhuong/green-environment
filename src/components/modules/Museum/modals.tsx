"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { X } from "lucide-react";

const Modals = ({ isShowDrawer, setIsShowDrawer, content }: any) => {
  const ref: any = useRef(null);

  const handleHiddenModel = () => {
    setIsShowDrawer(false);
  };
  useEffect(() => {
    const handleClick = (event: any) => {
      if (isShowDrawer && !ref?.current?.contains(event.target)) {
        handleHiddenModel();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isShowDrawer]);

  return (
    <div>
      {isShowDrawer && (
        <div
          ref={ref}
          className="absolute left-10 top-1/2 z-20 max-w-[40%] -translate-y-1/2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                x: -100,
                y: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                duration: 0.75,
              }}
              exit={{
                x: -100,
                y: 100,
                opacity: 0,
                scale: 0.5,
                transition: {
                  type: "spring",
                  duration: 0.75,
                },
              }}
              key={content?._id ?? "empty"}
              className="flex w-full flex-col gap-5 rounded-xl bg-white/60 bg-cover bg-center py-10 drop-shadow-2xl backdrop-blur-lg"
            >
              <span className="absolute left-0 right-0 top-0 z-30 h-10">
                <button
                  onClick={handleHiddenModel}
                  className="absolute right-1 top-1 rounded-full p-2 transition-all duration-500 hover:rotate-180"
                >
                  <X />
                </button>
              </span>
              <div className="relative rounded-2xl">
                <span className="group w-full overflow-hidden">
                  <span
                    style={{
                      maskImage: "url('/images/background_frames.png')",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                    }}
                  >
                    <Image
                      src={content.bannerUrl}
                      alt={content.name}
                      width={300}
                      height={300}
                      className="bg-background_library h-full w-full transition-all duration-500 group-hover:scale-125"
                    />
                  </span>
                </span>
              </div>
              <div className="text-wrap break-words px-12">
                <h2 className="font-title text-3xl font-medium text-black">
                  {content.name}
                </h2>
              </div>
              <div
                className="w-full text-wrap break-words px-12"
                dangerouslySetInnerHTML={{ __html: content.description }}
              ></div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Modals;
