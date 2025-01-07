"use client";
import {
  AnimatePresence,
  frame,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import React, {
  Fragment,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import arrow from "@public/arrow.svg";
import arrow_left from "@public/arrow_left.svg";
import fpt_aptech from "@public/images/timeline/fpt-aptech.jpg";
import fpt_2 from "@public/images/timeline/FPTU-CSVC1thumb.webp";
import fpt_3 from "@public/images/timeline/fpt_cantho.jpg";
import fpt_4 from "@public/images/timeline/fpt_fpt.jpg";
import fpt_5 from "@public/images/timeline/fpt_cantho_2.png";
import green_wich from "@public/images/timeline/greenwich.jpg";
import poly_pft from "@public/images/timeline/poly_fpt.jpg";
import poly_pft_2 from "@public/images/timeline/poly_fpt_2.jpg";
import thpt_fpt from "@public/images/timeline/thpt_fpt.jpeg";
import thpt_fpt_1 from "@public/images/timeline/thpt_fpt_1.jpg";
import thpt_fpt_2 from "@public/images/timeline/thpt_fpt_2.jpg";
import swinburne_fpt from "@public/images/timeline/swinburne_fpt.jpg";
import jetking_fpt from "@public/images/timeline/jetking_fpt.jpg";
import thpt_fpt_3 from "@public/images/timeline/thpt_fpt_3.jpg";
import funix_fpt from "@public/images/timeline/funix_fpt.jpg";
import skilling_fpt from "@public/images/timeline/skilling_fpt.jpg";
import fpt_coking from "@public/images/timeline/fpt_1.jpg";
import poly_fpt_4 from "@public/images/timeline/poly_fpt_4.jpg";
import fpt_6 from "@public/images/timeline/fpt_2.jpg";
import fpt_quynhon from "@public/images/timeline/fpt_quynhon.jpg";
import melbourne_fpt from "@public/images/timeline/melbourne_fpt.jpg";
import fpt_haiphong from "@public/images/timeline/fpt_haiphong.jpg";
import fpt_bacninh from "@public/images/timeline/fpt_bacninh.jpg";
import fpt_hanam from "@public/images/timeline/fpt_hanam.jpg";
import useStore from "@/store";
const slides = [
  {
    time: "1999",
    title: "Thành lập FPT Aptech",
    content: [
      "Đào tạo Lập trình viên Quốc tế",
      "Bước tiến đầu tiên của Tập đoàn FPT vào lĩnh vực giáo dục",
    ],
    image: fpt_aptech,
  },
  {
    time: "2004",
    title: "Thành lập FPT Arena",
    content: ["Đào tạo Mỹ thuật Đa phương tiện"],
    image: fpt_2,
  },
  {
    time: "2006",
    title: "Thành lập Đại học FPT",
    content: [
      "Đào tạo Kỹ sư, Cử nhân Đại học",
      "Bước tiến quan trọng của Tập đoàn FPT trong lĩnh vực giáo dục",
    ],
    image: fpt_3,
  },
  {
    time: "2009",
    title: "Thành lập FPT Greenwich",
    content: [
      "Đào tạo Kỹ sư, Cử nhân lấy bằng do Đại học Greenwich (Anh Quốc) cấp",
    ],
    image: green_wich,
  },
  {
    time: "2009",
    title: "Thành lập Viện Quản trị và Công nghệ FSB",
    content: ["Đào tạo Thạc sĩ Quản trị Kinh doanh và Công nghệ thông tin"],
    image: fpt_4,
  },
  {
    time: "2010",
    title: "Thành lập Cao đẳng Thực hành FPT Polytechnic",
    content: [
      "Đào tạo Kỹ sư, Cử nhân Cao đẳng Thực hành",
      "Bước tiến quan trọng trong việc mở rộng đào tạo",
    ],
    image: fpt_5,
  },
  {
    time: "2011",
    title: "Thành lập FPT Jetking",
    content: ["Đào tạo Phần cứng máy tính và Hệ thống mạng"],
    image: jetking_fpt,
  },
  {
    time: "2013",
    title: "Thành lập THPT FPT (Hoà Lạc)",
    content: ["Đào tạo bậc phổ thông từ lớp 10 - lớp 12 theo mô hình nội trú"],
    image: thpt_fpt_3,
  },
  {
    time: "2015",
    title: "Thành lập FUNiX",
    content: ["Đào tạo Kỹ sư CNTT theo hình thức trực tuyến"],
    image: funix_fpt,
  },
  {
    time: "2016",
    title: "Thành lập Poly K-Beauty thuộc FPT Polytechnic",
    content: ["Đào tạo ngành Thẩm mỹ & Làm đẹp"],
    image: poly_pft,
  },
  {
    time: "2017",
    title: "Thành lập BTEC FPT",
    content: ["Cao đẳng Anh quốc BTEC FPT"],
    image: poly_pft_2,
  },
  {
    time: "2017",
    title: "Thành lập Tiểu học & THCS FPT Cầu Giấy",
    content: ["Trường Tiểu học & THCS đầu tiên của FPT Education"],
    image: thpt_fpt_2,
  },
  {
    time: "2018",
    title: "Thành lập FPT Skilling",
    content: [
      "Đào tạo chuyên sâu và cấp chứng chỉ quốc tế về Digital Marketing",
    ],
    image: skilling_fpt,
  },
  {
    time: "2019",
    title: "Thành lập FPT Coking",
    content: [
      "Đào tạo chuyên sâu và cấp chứng chỉ quốc tế về Internet Of Things",
    ],
    image: fpt_coking,
  },
  {
    time: "2019",
    title: "Thành lập THPT FPT Cần Thơ",
    content: ["Đào tạo bậc phổ thông từ lớp 10 - lớp 12"],
    image: thpt_fpt_1,
  },
  {
    time: "2019",
    title: "Thành lập Tiểu học - THCS - THPT FPT Đà Nẵng",
    content: ["Đào tạo bậc phổ thông từ lớp 1 - lớp 12"],
    image: thpt_fpt,
  },
  {
    time: "2019",
    title: "Thành lập Swinburne Việt Nam",
    content: [
      "Đào tạo Kỹ sư, Cử nhân lấy bằng do Đại học Công nghệ Swinburne (Australia) cấp",
    ],
    image: swinburne_fpt,
  },
  {
    time: "2019",
    title: "Thành lập Chương trình Phổ thông Cao đẳng thuộc FPT Polytechnic",
    content: [
      "Đào tạo nghề cho học sinh tốt nghiệp THCS trở lên, lấy bằng Cao đẳng chính quy",
    ],
    image: poly_fpt_4,
  },
  {
    time: "2019",
    title: "Hitech gia nhập FPT Polytechnic",
    content: [],
    image: fpt_6,
  },
  {
    time: "2021",
    title: "Thành lập THPT FPT Quy Nhơn",
    content: ["Đào tạo bậc phổ thông từ lớp 10 - lớp 12"],
    image: fpt_quynhon,
  },
  {
    time: "2022",
    title: "Thành lập Melbourne Polytechnic Việt Nam",
    content: [
      "Đào tạo Cử nhân, lấy bằng Cao đẳng do Melbourne Polytechnic (Australia) cấp",
    ],
    image: melbourne_fpt,
  },
  {
    time: "2022",
    title: "Thành lập THCS - THPT FPT Hải Phòng",
    content: ["Đào tạo bậc phổ thông từ lớp 6 - lớp 12"],
    image: fpt_haiphong,
  },
  {
    time: "2022",
    title: "Thành lập Tiểu học - THCS - THPT FPT Bắc Ninh",
    content: ["Đào tạo bậc phổ thông từ lớp 1 - lớp 12"],
    image: fpt_bacninh,
  },
  {
    time: "2023",
    title: "Thành lập Tiểu học, THCS, THPT FPT Hà Nam, Bắc Giang",
    content: ["Đào tạo bậc phổ thông từ lớp 1 - lớp 12"],
    image: fpt_hanam,
  },
];
const spring = { bounce: 0, stiffness: 50, restDelta: 0.001, damping: 10 };

const animate: any = {
  show: (index: number) => ({
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.75,
      delay: 0.1 * index,
    },
  }),
  hidden: {
    y: -50,
    rotateX: 90,
    opacity: 0,
  },
};

const TimeLineSection = () => {
  const [select, setSelect] = useState(0);
  const setTargetSection = useStore((state: any) => state.setTargetSection);
  const [navigation, setNavigation] = useState<
    "left" | "right" | "mid" | "over"
  >("mid");
  const [postionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [isViewed, setViewed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const view = useInView(ref);

  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        xPoint.set(navigation === "right" ? clientX - 50 : clientX);
        yPoint.set(clientY - 12);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [navigation]);

  useEffect(() => {
    const handleView = () => {
      if (
        view &&
        Math.abs(window.scrollY - (ref?.current?.offsetTop ?? 0)) < 80
      ) {
        window.scrollTo({
          top: ref?.current?.offsetTop,
          left: 0,
          behavior: "smooth",
        });
        setViewed(true);
      }
    };
    if (view)
      setTargetSection({
        aboutUs: false,
        timeline: true,
        featuredMember: false,
        community: false,
      });
    window.addEventListener("scrollend", handleView);
    return () => window.removeEventListener("scrollend", handleView);
  }, [view, isViewed]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.clientX > (3 * window.innerWidth) / 4) {
      if (select < slides.length - 1) {
        setSelect(select + 1);
      } else {
        setSelect(0);
      }
      return;
    }
    if (event.clientX < window.innerWidth / 4) {
      if (select > 0) {
        setSelect(select - 1);
      } else {
        setSelect(slides.length - 1);
      }
      return;
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPositionMouse({ x: event.clientX, y: event.clientY });
    if (event.clientX > (3 * window.innerWidth) / 4) {
      setNavigation("right");
    } else if (event.clientX < window.innerWidth / 4) {
      setNavigation("left");
      return;
    } else setNavigation("mid");
  };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setNavigation("over")}
      className="relative h-screen w-full cursor-none overflow-hidden"
    >
      <div id="thanh-tuu"></div>
      <div className="absolute inset-0 z-[1] bg-black/60"></div>
      <div className="absolute inset-0 z-0 bg-primary"></div>
      {navigation !== "over" && (
        <motion.span
          animate={{
            x: postionMouse.x - 24,
            y: postionMouse.y - 24,
          }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0,
            delay: 0,
          }}
          className="absolute z-10 aspect-square w-12 rounded-full border-[1px] border-white"
        ></motion.span>
      )}
      <motion.span
        style={{
          x,
          y,
        }}
        className="absolute z-10"
      >
        {navigation !== "mid" && navigation !== "over" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={navigation}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image
                src={navigation === "right" ? arrow : arrow_left}
                alt="arrow"
                width={50}
                height={8}
                className=""
              />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.span>
      <div className="h-full">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-10">
            <AnimatePresence mode="wait">
              <motion.span
                initial={{
                  x: -400,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: -400,
                  opacity: 0,
                  transition: {
                    duration: 0.75,
                  },
                }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.75,
                }}
                key={select + "left"}
                className="absolute left-10 top-1/2 z-10 h-px w-96 -translate-y-1/2 bg-white"
              ></motion.span>
              <motion.span
                initial={{
                  x: 400,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: 400,
                  opacity: 0,
                  transition: {
                    duration: 0.75,
                  },
                }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.75,
                }}
                key={select + "right"}
                className="absolute right-10 top-1/2 z-10 h-px w-96 -translate-y-1/2 bg-white"
              ></motion.span>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                filter: "blur(5px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,

                transition: {
                  type: "spring",
                  duration: 4,
                },
              }}
              exit={{
                filter: "blur(5px)",
                opacity: 0,
                transition: {
                  type: "spring",
                  duration: 0.75,
                },
              }}
              key={slides[select].title + "image" + select}
              className="absolute inset-0 z-0"
            >
              <Image
                src={slides[select]?.image}
                alt="image"
                width={1000}
                height={900}
                className="h-full w-full object-cover"
              ></Image>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              exit={{
                opacity: 0,
                x: navigation === "left" ? 200 : -400,
                scale: 0,
              }}
              initial={{
                x: "-50%",
                y: "-50%",
                scale: 1,
              }}
              transition={{
                type: "spring",
                duration: 0.75,
              }}
              key={slides[select]?.time + select + "content"}
              className="font-white absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-1 font-time text-9xl font-black"
              style={{ perspective: 1000 }}
            >
              {slides[select]?.time.split("").map((letter: String, index) => (
                <Fragment key={index}>
                  <motion.p
                    variants={animate}
                    animate="show"
                    initial="hidden"
                    custom={index}
                    key={slides[select]?.time + select}
                    className="text-white"
                  >
                    {letter}
                  </motion.p>
                </Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-3/4 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly gap-48">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{
                  x: navigation === "left" ? 200 : -400,
                  scale: 0,
                  opacity: 0,
                }}
                key={slides[select]?.title}
                transition={{
                  type: "spring",
                  duration: 0.75,
                }}
                className="font-title text-3xl font-normal"
              >
                <h2 className="text-center text-white">
                  {slides[select]?.title}
                </h2>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.span
                initial={{ scale: 0, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{
                  x: navigation === "left" ? 200 : -400,
                  scale: 0,
                  opacity: 0,
                }}
                key={slides[select]?.content.join("") + select}
                className="flex flex-col items-center gap-2"
              >
                {slides[select]?.content.map((item, index) => (
                  <p key={index} className="font-light text-white">
                    {item}
                  </p>
                ))}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div id="nhan-vat"></div>
    </div>
  );
};

export default TimeLineSection;
