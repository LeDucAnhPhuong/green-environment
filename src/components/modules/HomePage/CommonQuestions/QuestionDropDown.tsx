"use client";
import { cn } from "@/lib/utils";
import { url } from "inspector";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useRef, useEffect } from "react";

interface QuestionDropDownProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function QuestionDropDown({ question, answer, isOpen, onToggle }: QuestionDropDownProps) {
  const [height, setHeight] = React.useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="h-fit w-full"
    >
      <div
        className={cn(
          "shadow-custom flex cursor-pointer justify-between rounded-l-[10px] rounded-br-[10px] rounded-tr-[30px] px-6 py-4 transition duration-700",
          !isOpen
            ? "shadow-custom border border-background bg-background"
            : "border transition-all border-primary-darker bg-[#569f592d] shadow-none",
            "gap-2"
        )}
        onClick={onToggle}
      >
        <p className="font-bold">{question}</p>
        {!isOpen ? <ChevronDown className="text-[24px]"/> : <ChevronUp className="text-[24px]"/>}
      </div>
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-height duration-500 ease-in-out"
      >
        <div className="px-[40px] py-[20px]">
          <p className="opacity-80">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionDropDown;
