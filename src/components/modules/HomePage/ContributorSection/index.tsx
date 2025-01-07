"use client";

import { useEffect, useState } from "react";
import items from "../../../../data/featuredMember";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import endpoint from "@/app/service/endpoint";
import Link from "next/link";

const ContributorSection = () => {
  const [filter, setFilter] = useState("*");
  const [data, setData] = useState([]);
  const filteredItems =
    filter === "*" ? data : data.sort(() => Math.random() - 0.5).slice(0, 10);

  const getProject = async () => {
    try {
      const newData = await axios.get(endpoint.GET_PROJECT);
      setData(newData.data.data);
    } catch (err) {}
  };
  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="mt-40">
      <div className="m-12 text-center text-5xl font-bold">
        Vì sự nghiệp toàn cầu hóa
      </div>
      <div className="container">
        <ul className="g-control-nav-two text-center">
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "*" ? "is-checked" : "",
            )}
            onClick={() => setFilter("*")}
          >
            Tất cả
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "marketing" ? "is-checked" : "",
            )}
            onClick={() => setFilter("marketing")}
          >
            Trí tuệ nhân tạo
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "application" ? "is-checked" : "",
            )}
            onClick={() => setFilter("application")}
          >
            Bán dẫn
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "design" ? "is-checked" : "",
            )}
            onClick={() => setFilter("design")}
          >
            Xe điện
          </li>
          <li
            className={cn(
              "flex items-center justify-center hover:text-primary",
              filter === "dev" ? "is-checked" : "",
            )}
            onClick={() => setFilter("dev")}
          >
            Chuyển đổi số và môi trường
          </li>
        </ul>
        <motion.div className="mt-20 grid grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item: any, index: number) => (
              <motion.div
                initial={{
                  y: 60,
                  scale: 0.75,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  y: 60,
                  scale: 0.75,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    delay: 0.1 * index,
                  },
                }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
                className="cursor-pointer"
                key={item._id + filter}
                viewport={{
                  once: true,
                }}
              >
                <Link href={`blog/${item?.slug}` ?? ""}>
                  <div className="hvr-shutter-out">
                    <div className="img-meta relative w-full">
                      <Image
                        src={item.image}
                        width={400}
                        height={600}
                        alt="gallary"
                        className="h-80 w-full object-cover"
                      />

                      <div className="caption absolute top-1/2 flex-col content-center text-center">
                        <span className="tag w-4/5">
                          <p className="line-clamp-3">{item.subTitle}</p>
                        </span>
                      </div>
                      {/* <!-- /.caption --> */}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributorSection;
