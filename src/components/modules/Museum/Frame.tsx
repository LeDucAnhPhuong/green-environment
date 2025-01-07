import { Html } from "@react-three/drei";
import Image from "next/image";
import React from "react";
import useModal from "@/hooks/useModal";
function Frame({ data, setIsShowDrawer, setContent }: any) {
  return (
    <>
      <Html
        position={[data?.positionX, data?.positionY, data?.positionZ]}
        rotation={[data?.rotationX, data?.rotationY, data?.rotationZ]}
        transform
        scale={data?.scale}
        zIndexRange={[0, 0]}

        // occlude="blending"
      >
        <div className="flex flex-col items-center gap-5 bg-none">
          <p className="select-none font-time text-xl font-semibold">
            Năm {data.year}
          </p>
          <div className="select-none bg-slate-950 p-2">
            <div
              onClick={(e) => {
                setIsShowDrawer(true);
                setContent(data);
                e.stopPropagation();
              }}
              className="bg-white p-4"
            >
              <Image
                alt=""
                src={data.bannerUrl}
                width={1920}
                height={1080}
                className="pointer-events-none aspect-video w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Html>
    </>
  );
}

export default Frame;
