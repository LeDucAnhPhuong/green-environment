"use client";
import React, { useEffect, useRef } from "react";
import ContributorSection from "../ContributorSection";
import Dedicated from "./Dedicated";
import { useInView } from "framer-motion";
import useStore from "@/store";

function FeaturedMemberSession() {
  const setTargetSection = useStore((state: any) => state.setTargetSection);
  const ref = useRef(null);
  const view = useInView(ref);
  useEffect(() => {
    if (view)
      setTargetSection({
        aboutUs: false,
        timeline: false,
        featuredMember: true,
        community: false,
      });
  }, [view]);
  return (
    <div ref={ref} className="relative mx-[60px]">
      <Dedicated />
    </div>
  );
}

export default FeaturedMemberSession;
