"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import logo from "@public/images/logo.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useDetectScroll from "@smakss/react-scroll-direction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useStore from "@/store";

const items = [
  { label: "Về chúng tôi", value: "ve-chung-toi", getTarget: "aboutUs" },
  { label: "Thành tựu", value: "thanh-tuu", getTarget: "timeline" },
  { label: "Nhân vật", value: "nhan-vat", getTarget: "featuredMember" },
  { label: "Cộng đồng", value: "cong-dong", getTarget: "community" },
];

function HeaderSticky() {
  const [selected, setSelected] = useState("");
  const [isInHeader, setIsInHeader] = useState(true);
  const targetSection = useStore((state: any) => state.targetSection);
  const router = useRouter();

  const { scrollDir } = useDetectScroll();

  const handleScroll = useCallback(() => {
    setSelected("");
    if (window.scrollY > 10) {
      setIsInHeader(false);
    } else {
      setIsInHeader(true);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-50 h-24 border-b-[1px] border-b-white/10 bg-white drop-shadow-md transition-all duration-500",
        scrollDir === "down" && "-translate-y-full",
        isInHeader && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-20 text-white">
        <Image src={logo} alt="" height={52} />
        <nav>
          <ul className="flex gap-10">
            {items.map((item) => (
              <li key={item.label}>
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => {
                    setSelected(item.label);
                    router.push(`#${item.value}`);
                  }}
                >
                  <span
                    className={cn(
                      "h-2 w-3 rounded-bl-full rounded-tl-full bg-primary transition-all duration-500",
                      selected === item.label || targetSection[item.getTarget]
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm uppercase transition-all duration-500",
                      selected === item.label || targetSection[item.getTarget]
                        ? "text-primary"
                        : "text-black",
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Search width={20} className="text-black" />
          <Link href={"trien-lam"}>
            <Button>
              <div className="flex items-center gap-2">
                <span>Khám phá</span>
                <ArrowRight width={16} />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderSticky;
