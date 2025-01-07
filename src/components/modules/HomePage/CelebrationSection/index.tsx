"use client";
import Title from "@/components/ui/title-common";
import { EarthIcon, Mountain, MountainSnow } from "lucide-react";
import Image from "next/image";
import { delay, motion } from "framer-motion";
const data = [
  {
    title: `Chuỗi sự kiện “Lên Ngàn”`,
    content: `FPT Education kỷ niệm 25 năm bằng chuỗi sự kiện "Lên Ngàn", khuyến khích tinh thần "vượt qua giới hạn" và "phát triển bền vững".`,
  },
  {
    title: `Chặng "Tiên phong"`,
    content: `CBGV chinh phục 8 đỉnh núi: Fansipan, Tả Liên Sơn, Tà Chì Nhù, Putaleng, Lảo Thẩn, Tà Xùa, Ngũ Chỉ Sơn và Everest Base Camp. Đây là cơ hội rèn luyện sức khỏe và gắn kết tinh thần đồng đội.`,
  },
  {
    title: `Hỗ trợ tài chính`,
    content: `Chương trình hỗ trợ 50% chi phí tour, tối đa 5.000.000 VNĐ mỗi người, tạo điều kiện thuận lợi cho CBGV tham gia. Chuỗi hoạt động truyền cảm hứng và khuyến khích tinh thần tiên phong.`,
  },
];

function CelebrationSection() {
  return (
    <div className="min-h-[300px] bg-primary-dark">
      <div className="container relative pb-[130px] pt-[130px]">
        <Image
          src="/introduction/celebration-section_image.png"
          alt=""
          width={500}
          height={500}
          className="absolute -left-[20%] top-[5%] h-auto w-[85%]"
        />
        <div className="grid grid-cols-11">
          <div className="col-span-5 place-content-center">
            {/* <Image
                            src="/introduction/celebration_image(2).webp"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-[250px] z-10"
                        /> */}
            <Image
              src="/introduction/celebration_image(1).webp"
              alt=""
              width={1000}
              height={1000}
              className="z-10 h-[500px] w-[500px] object-cover"
            />
          </div>
          <div className="col-span-6 ml-5">
            <Title
              title='Kỷ Niệm 25 Năm Thành Lập FPT Education: Hành Trình "Lên Ngàn"'
              subtitle="về chúng tôi"
              align="left"
              className="mb-5 max-w-none text-white"
            />
            <div className="flex flex-col gap-8">
              {data.map((item, index) => (
                <div key={index} className="relative flex flex-col">
                  <motion.div
                    initial={{
                      x: -10,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      duration: 1,
                      delay: 0.25 * index,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="absolute top-[8px] h-[20px] w-[10px] rounded-br-[10px] rounded-tr-[10px] bg-primary"
                  ></motion.div>
                  <motion.h2
                    initial={{
                      x: -40,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      duration: 1,
                      delay: 0.25 * index,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="ml-8 text-[26px] font-semibold text-primary"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      y: 40,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      duration: 1.25,
                      delay: 0.4 * index,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="ml-8 text-[#C4C4C4]"
                  >
                    {item.content}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelebrationSection;
