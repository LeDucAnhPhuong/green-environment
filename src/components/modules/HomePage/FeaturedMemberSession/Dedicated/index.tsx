import React from "react";
import { Tabs } from "./slider";

import vothetoan from "@public/images/featuredMember/vothetoan.png";
import dieunhi from "@public/images/featuredMember/dieunhi.png";
import thucnhi from "@public/images/featuredMember/thucnhi.png";
import huyenduyen from "@public/images/featuredMember/huyenduyen.png";
import { StaticImageData } from "next/image";
type InterfaceData = {
  title: string;
  value: string;
  decsrition: string;
  name: string;
  image: StaticImageData;
};
const fakeTabs: Array<InterfaceData> = [
  {
    title: "Cóc Vàng Công nghệ thông tin",
    value: "tab1",
    decsrition: `cô “trạng cóc" bé nhỏ nhưng mang trong mình sức mạnh nội tại to lớn đã đạt được thành tích đáng tự hào trong học kỳ Fall vừa qua.`,
    name: "Lê Phước Diệu My",
    image: dieunhi,
  },
  {
    title: "Cóc Vàng khối ngành Kinh tế",
    value: "tab2",
    decsrition: `Sau khi tốt nghiệp THPT, cô bạn tìm hiểu về Đại học FPT và bị thu hút bởi môi trường "học phải đi đôi với hành" tại đây.`,
    name: "Nguyễn Thị Huyền Duyên",
    image: huyenduyen,
  },
  {
    title: "Cóc Vàng khối ngành Ngôn ngữ",
    value: "tab3",
    decsrition: `Chấp nhận từ bỏ kiến thức cũ, lối tư duy cũ và chủ động hơn trong học tập. Mình sẵn sàng coi thất bại như một bài học kinh nghiệm để càng thêm trưởng thành hơn. `,
    name: "Trần Thục Nhi",
    image: thucnhi,
  },
  {
    title: "Cóc Vàng khối ngành Kỹ thuật",
    value: "tab4",
    decsrition: `Việc học trên lớp chỉ là một phần và nó giống như là “bàn đạp”. Để có thể tiếp thu được nhiều kiến thức hơn thì sinh viên chúng mình cũng cần phải tự học và tìm tòi rất nhiều.`,
    name: "Phạm Thế Toàn",
    image: vothetoan,
  },
];

function Dedicated() {
  return (
    <div className="mx-auto my-[80px] w-full mt-32">
      <Tabs tabs={fakeTabs} />
    </div>
  );
}

export default Dedicated;
