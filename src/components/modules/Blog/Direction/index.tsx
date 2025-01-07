"use client";
import React from "react";
import Link from "next/link";
import arrowRight from "@public/icons/project/arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Direction({ currenPage }: any) {
  const router = useRouter();
  return (
    <>
      <div className="align-center flex flex-row text-[14px] font-[400] leading-normal opacity-70">
        <div
          onClick={() => {
            router.back();
          }}
          className="cursor-pointer"
        >
          <div className="text-xl hover:text-primary mr-1 transition-colors duration-500">Trang chủ</div>
        </div>
        <Image
          loading="lazy"
          className=""
          src={arrowRight}
          alt="right arrow"
        ></Image>
        <div className="font-[700] text-xl ml-1">{currenPage}</div>
      </div>
    </>
  );
}

export default Direction;
