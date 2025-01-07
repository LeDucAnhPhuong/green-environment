"use client";
import Title from "@/components/ui/title-common";
import { EarthIcon, Mountain, MountainSnow } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const data = [
  {
    introduction:
      "FPT Education, thành lập năm 1999, là một trong ba mảng hoạt động cốt lõi của Tập đoàn FPT - Tập đoàn tiên phong trong lĩnh vực CNTT của Việt Nam. Với tầm ảnh hưởng quốc tế, FPT Education đã mở rộng ra đầy đủ các cấp học, góp phần cung cấp nguồn nhân lực chất lượng cao cho thị trường lao động.",
    celebrationTitle: `Kỷ Niệm 25 Năm FPT Education`,
    celebrationContent: `FPT Education kỷ niệm 25 năm thành lập (1999-2024) với chuỗi sự kiện “Lên Ngàn”, chinh phục 25 đỉnh núi trong và ngoài nước. Chương trình thể hiện tinh thần "vượt qua giới hạn" và "phát triển bền vững", đồng thời hỗ trợ 50% chi phí cho CBGV tham gia.`,
  },
];

function IntroductionSection() {
  return (
    <div className="min-h-[300px]">
      <div className="container pb-[130px] pt-[130px]">
        <div className="relative">
          <Image
            src="/introduction/background_image.webp"
            alt=""
            width={500}
            height={500}
            className="absolute right-[20%] top-[150px] w-full max-w-none animate-alternate"
          />
        </div>
        <div className="row items-center">
          <div className="flex flex-row">
            <div className="mr-[20px] mt-[100px]">
              <Title
                title="FPT Education"
                subtitle="về chúng tôi"
                align="left"
                className="mb-5"
              />
              {data.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <p className="mb-9 text-base text-[#7A7A7A]">
                    {item.introduction}
                  </p>
                  <div className="flex flex-row gap-10">
                    <div className="items-start">
                      <MountainSnow className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <p className="mb-4 text-[20px] font-semibold">
                        {item.celebrationTitle}
                      </p>
                      <span className="text-base text-[#7A7A7A]">
                        {item.celebrationContent}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative ml-[20px] flex flex-row">
              <div>
                <motion.div
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.25,
                    delay: 0.25,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="mb-[16px] w-fit rounded-br-[20px] rounded-tl-[20px] bg-primary pb-[40px] pl-[55px] pr-[20px] pt-[30px]"
                >
                  <p className="mb-[18px] text-2xl italic text-[#ffff]">
                    &quot;Làm khác để làm tốt&quot;
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <div className="ml-[20px] h-[1px] w-[60px] bg-white"></div>
                    <span className="w-28 text-sm text-[#ffff]">
                      Lê Trường Tùng
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.25,
                    delay: 0.25,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Image
                    src="/introduction/Introduction_image(2).png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-[400px] w-[274px] max-w-none rounded-[12px] object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  duration: 1.25,
                  delay: 0.25,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Image
                  src="/introduction/Introduction_image(6).jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="ml-[28px] mt-[64px] h-[420px] w-[274px] max-w-none rounded-[12px] object-cover"
                />
              </motion.div>
              <Image
                src="/introduction/about-shape-1.webp"
                alt=""
                width={500}
                height={500}
                className="absolute left-[35%] top-[53%] h-[170px] w-[170px] max-w-none animate-spin duration-50000"
              />
              <div className="absolute left-[39%] top-[57%] h-[130px] w-[130px] rounded-full bg-white"></div>
              <div className="absolute left-[39.5%] top-[57%] h-[120px] w-[120px] animate-spin rounded-full border-2 border-dashed border-primary bg-white duration-50000"></div>
              <Image
                src="/introduction/fpt-education-logo(2).webp"
                alt=""
                width={500}
                height={500}
                className="absolute left-[41.5%] top-[63%] h-auto w-[100px] max-w-none"
              />
              <div className="absolute left-[77%] top-[78%] h-[70px] w-[70px] bg-primary"></div>
              <div className="absolute left-[63%] top-[88%] h-[20px] w-[20px] bg-[#ebebeb]"></div>
              <div className="absolute left-[71%] top-[95%] h-[42px] w-[42px] bg-[#ebebeb]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
