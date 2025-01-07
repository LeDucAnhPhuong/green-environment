"use client";

import { useState } from "react";

import Experience from "./Experience";
import { useRouter } from "next/navigation";

import FloatButtons from "./FloatButtons";
import Modals from "./modals";

function MuseumModule() {
  const router = useRouter();
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const [content, setContent] = useState({});

  return (
    <>
      <FloatButtons />
      <section className="relative h-screen w-screen">
        <Modals
          isShowDrawer={isShowDrawer}
          setIsShowDrawer={setIsShowDrawer}
          content={content}
        />
        <Experience setIsShowDrawer={setIsShowDrawer} setContent={setContent} />
      </section>
    </>
  );
}

export default MuseumModule;
