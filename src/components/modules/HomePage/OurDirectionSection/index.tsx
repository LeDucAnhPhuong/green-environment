'use client'

import Title from "@/components/ui/title-common";
import { BrainCircuit, Car, Cpu, EarthIcon, Mountain, MountainSnow } from "lucide-react";
import Image from "next/image";
const data = [
    {
        icon: "",
        title: `Trí tuệ nhân tạo`,
        content: `FPT đẩy mạnh nghiên cứu AI nhằm phát triển các ứng dụng thông minh, nâng cao hiệu quả công việc và cuộc sống.`,
        image: `/direction_images/Artificial-Intelligence.jpg`,
    },
    {
        icon: "",
        title: `Bán dẫn`,
        content: `FPT hướng tới phát triển công nghệ bán dẫn, góp phần vào sản xuất các thiết bị điện tử tiên tiến và thông minh.`,
        image: `/direction_images/chip-abstract.jpg`,
    },
    {
        icon: "",
        title: `Xe điện`,
        content: `FPT nghiên cứu và phát triển xe điện, thúc đẩy giao thông xanh, bảo vệ môi trường và tiết kiệm năng lượng.`,
        image: `/direction_images/electric-car.jpg`,
    },
    {
        icon: "",
        title: `Chuyển đổi số`,
        content: `FPT tiên phong trong chuyển đổi số, giúp các doanh nghiệp tối ưu hoá quy trình và nâng cao năng lực cạnh tranh.`,
        image: `/direction_images/digital_transformation.jpg`,
    },
    {
        icon: ``,
        title: `Môi trường xanh`,
        content: `FPT cam kết phát triển bền vững, bảo vệ môi trường xanh sạch đẹp, vì một tương lai sống lành mạnh.`,
        image: `/direction_images/fresh-environment.jpg`,
    }
]

function OurDirectionSection() {
    return (
        <div className="min-h-[300px]">
            <div className="container pt-[130px] pb-[130px] relative">
                <div className="relative">
                    <Image
                        src="/introduction/background_image.webp"
                        alt=""
                        width={500}
                        height={500}
                        className="max-w-none w-full absolute  top-[30px] animate-alternate"
                    />
                    <Image
                        src="/direction_images/quotation-marks-1.png"
                        alt=""
                        width={500}
                        height={500}
                        className="max-w-24 absolute opacity-20 top-[70px] left-[1100px]"
                    />
                    <Image
                        src="/direction_images/quotation-marks-1.png"
                        alt=""
                        width={500}
                        height={500}
                        className="max-w-24 absolute opacity-20 top-[500px] -left-[100px] rotate-180"
                    />
                </div>
                <Title
                    title="Lĩnh Vực Phát Triển Chiến Lược của FPT Education"
                    subtitle="định hướng của chúng tôi"
                    align="center"
                    className="mb-8  max-w-[800px]"
                />
                <div className="flex flex-row items-center justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="group mx-2 w-[150px] h-[300px] relative flex-1 cursor-pointer hover:flex-[3_3_0%] duration-500" >
                            <Image
                                src={item.image}
                                alt=""
                                width={500}
                                height={500}
                                className="max-w-none object-cover w-full h-[300px] rounded-md"
                            />
                            <div className="w-full h-0 absolute flex flex-col items-center justify-center px-10 bottom-0 left-0 right-0 bg-gradient-to-t from-[#1c1c1c] to-transparent transition-card overflow-hidden group-hover:h-full">
                                <h1 className="w-[400px] text-white text-2xl font-semibold text-center">{item.title}</h1>
                                <p className="w-[400px] text-[#C4C4C4]  text-center ">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurDirectionSection;
