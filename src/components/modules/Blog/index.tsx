"use client";
import React from "react";

import Image from "next/image";
import { TracingBeam } from "./tracing-beam";
import PortfolioDetailsTitle from "./PortfolioDetailsTitle";
import Banner from "./Banner";
import Body from "./Body";
import fpt from "@public/images/timeline/FPTU-CSVC1thumb.webp";
export function BlogsModule({ data }: any) {
  return (
    <div className="mt-24">
      <TracingBeam className="px-6">
        {/* <PortfolioDetailsTitle portfolio={null} /> */}

        <div className="flex flex-col gap-20">
          <Banner
            title={data?.title}
            image={data?.image}
            subTitle={data?.subTitle}
            slug={data?.slug}
          ></Banner>
          <Body description={data?.description}></Body>
        </div>
      </TracingBeam>
    </div>
  );
}
