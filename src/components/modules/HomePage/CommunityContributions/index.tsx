"use client";
import useModal from "@/hooks/useModal";
import SaveGreenImage from "@public/images/savegreen.png";
import { Trees, UserRound } from "lucide-react";
import Image from "next/image";
import ContributeDialog from "./ContributeDialog";
import MessageDialog from "./MessageDialog";
import { useEffect, useRef } from "react";
import useStore from "@/store";
import { motion, useInView } from "framer-motion";
const message = `<p style="max-width: 450px; border-radius: 8px; background-color: #f0f0f0; padding: 16px; text-align: center; font-weight: 600;">
    Kính gửi tới bạn,
    <br /> <br />
    <span style="font-style: italic;">
        Mẹ Trái Đất cần chúng ta bảo vệ để giữ gìn sự sống và vẻ đẹp màu xanh của hành tinh. Cảm ơn bạn đã cùng chung tay với chúng tôi để bảo vệ môi trường dù chỉ là hành động nhỏ. Mỗi người chúng ta đều có ý thức và tình cảm với thiên nhiên, đó sẽ là vũ khí tốt nhất cho chúng ta có thể giữ vững một Trái Đất xanh đẹp và bền vững. Cảm ơn bạn đã quan tâm!
    </span>
    <br /> <br /> Trân trọng,
        <br/> FPT Education

</p>
`;

function CommunityContributions() {
  const { visible, close, open } = useModal();
  const { openMessageDiaolog, setOpenMessageDiaolog } = useStore((state) => ({
    openMessageDiaolog: state.openMessageDiaolog,
    setOpenMessageDiaolog: state.setOpenMessageDiaolog,
  }));
  const setTargetSection = useStore((state: any) => state.setTargetSection);
  const ref = useRef(null);
  const view = useInView(ref);
  useEffect(() => {
    if (view)
      setTargetSection({
        aboutUs: false,
        timeline: false,
        featuredMember: false,
        community: true,
      });
  }, [view]);

  useEffect(() => {
    if (openMessageDiaolog) {
      const timer = setTimeout(() => {
        setOpenMessageDiaolog(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [openMessageDiaolog]);

  return (
    <div ref={ref} className="relative w-full py-[60px]">
      <div id="cong-dong"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://wordpress.zozothemes.com/ecohorbor/wp-content/uploads/sites/19/2024/03/wave-full-bg-1.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0px 105px",
          opacity: 0.5,
        }}
      ></div>
      <div className="">
        <div className="flex w-full translate-y-[-20%] justify-center">
          <h1 className="w-fit bg-white p-4 text-center text-[160px] font-[900] text-primary">
            SAVE GREEN
          </h1>
        </div>

        <span className="absolute left-1/2 top-[220px] z-10 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.div
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
              duration: 0.75,
              delay: 0.25,
            }}
            viewport={{
              once: true,
            }}
          >
            <Image
              src={SaveGreenImage}
              alt="Image"
              width={1000}
              height={1000}
              className="w-100"
            />
          </motion.div>
        </span>
        <div className="absolute top-[235px] z-20 flex w-full translate-y-[-20%] cursor-pointer justify-center">
          <div
            className="relative z-20 flex h-[85px] w-[85px] cursor-pointer items-center justify-center rounded-full bg-[#305531] text-center transition-all hover:bg-[#4d8b4f]"
            onClick={open}
          >
            <p className="font-bold text-white">
              <Trees size={38} />
            </p>
          </div>
          <div className="absolute top-[12px] h-[60px] w-[60px] animate-ping rounded-full border-2 border-primary"></div>
        </div>

        <ContributeDialog
          closeModal={close}
          visible={visible}
          openModal={open}
        />
        <MessageDialog htmlMessage={message} />
        <div className="bo/ttom-[30px] container relative z-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-primary">
                <UserRound className="text-white" size={18} />
              </span>
              <p className="text-center font-semibold">
                2.122 Người đã tưới nước cho cây xanh
              </p>
            </div>
            <p>(Nhấn vào biểu tượng cây xanh để tưới nước)</p>
          </div>
          <h1 className="mt-6 text-center text-[42px] font-bold">
            Biến đổi cuộc sống, từng bước xanh
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CommunityContributions;
