import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Card from "../HomePage/FeaturedMemberSession/Dedicated/card";
import Image from "next/image";

interface PortfolioDetailsTitleProps {
  portfolio: {
    tag?: string;
    name?: string;
  } | null;
}

const PortfolioDetailsTitle: React.FC<PortfolioDetailsTitleProps> = ({
  portfolio,
}) => {
  return (
    <div className="mt-200 relative flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="" data-aos="fade-right">
            <div className="mb-65 lg-mb-40">
              <h2 className="px-[10%] py-4 font-title text-5xl font-bold">
                {"portfolio?.name"}
              </h2>
            </div>
          </div>
          <Image
            src="/images/shape/shape_175.svg"
            alt="shape"
            className="h-32 w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsTitle;
