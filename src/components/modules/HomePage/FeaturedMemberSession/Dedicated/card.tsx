import Image, { StaticImageData } from "next/image";
import { TextGenerateEffect } from "./text-moving";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
type InterfaceData = {
  title: string;
  value: string;
  decsrition: string;
  name: string;
  image: StaticImageData;
};
const Card = ({ tab }: { tab: InterfaceData }) => {
  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-7xl rounded-md px-8">
          <div className="my-8 grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <Image
                src={tab.image}
                alt="man-icon"
                width={316}
                height={500}
                className="mx-auto aspect-[3/4] w-80 rounded-2xl object-cover md:mx-0"
              />
            </div>
            <div className="relative flex flex-col content-between justify-between">
              <motion.span
                animate={{
                  y: [20, 0],
                  opacity: [0.75, 1],
                }}
                transition={{
                  type: "spring",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <Image
                  src="images/dedicated/comma.svg"
                  alt="comma-image"
                  width={200}
                  height={106}
                  className="comma-pos absolute z-[0] hidden opacity-50 lg:block"
                />
              </motion.span>
              <div className="z-[10] flex flex-col gap-8">
                <div>
                  <h2 className="mt-5 pt-4 text-center text-4xl font-bold sm:leading-tight lg:text-start lg:text-6xl">
                    {tab.title}
                  </h2>
                  <TextGenerateEffect words={tab.decsrition} />
                </div>
                <div className="flex justify-start gap-8">
                  <div className="my-auto h-0 w-28 content-center justify-center border-4 border-background"></div>

                  <div className="text-2xl font-semibold">{tab.name}</div>
                </div>
                <Button className="z-[500] mt-4 w-1/3">
                  <div className="flex items-center gap-2">
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight width={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
