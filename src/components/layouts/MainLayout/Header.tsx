"use client";

import { ArrowRight, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import logo from "@public/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useStore from "@/store";
const items = [
  { label: "Về chúng tôi", value: "ve-chung-toi", getTarget: "aboutUs" },
  { label: "Thành tựu", value: "thanh-tuu", getTarget: "timeline" },
  { label: "Nhân vật", value: "nhan-vat", getTarget: "featuredMember" },
  { label: "Cộng đồng", value: "cong-dong", getTarget: "community" },
];

function Header() {
  const [selected, setSelected] = useState(items[0].label);
  const router = useRouter();
  const targetSection = useStore((state: any) => state.targetSection);

  const handleScroll = () => {
    setSelected("");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="absolute bottom-0 left-0 right-0 top-0 z-40 h-24 border-b-[1px] border-b-white/10 bg-opacity-0">
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
                        "h-2 w-3 rounded-bl-full rounded-tl-full bg-primary transition-all",
                        selected === item.label || targetSection[item.getTarget]
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium uppercase transition-all",
                        selected === item.label || targetSection[item.getTarget]
                          ? "text-primary"
                          : "text-white",
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
            <Search width={20} />
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
    </>
  );
}

export default Header;
