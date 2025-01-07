"use client";
import Title from "@/components/ui/title-common";
import React, { useState } from "react";
import QuestionDropDown from "./QuestionDropDown";

const questions = [
  {
    question: "FPT Education được thành lập vào năm nào và với mục tiêu gì?",
    answer:
      "FPT Education được thành lập vào năm 1999, với mục tiêu trở thành một trong ba mảng hoạt động cốt lõi của Tập đoàn FPT - một tập đoàn tiên phong trong lĩnh vực CNTT tại Việt Nam, và xây dựng thương hiệu giáo dục có tầm ảnh hưởng quốc tế.",
  },
  {
    question:
      "Những bước đi đầu tiên của FPT Education trong lĩnh vực giáo dục là gì?",
    answer:
      "Những bước đi đầu tiên của FPT Education bao gồm thành lập FPT Aptech vào năm 1999 để đào tạo Lập trình viên Quốc tế và thành lập FPT Arena vào năm 2004 để đào tạo Mỹ thuật Đa phương tiện.",
  },
  {
    question: "Đại học FPT được thành lập vào năm nào và có ý nghĩa gì?",
    answer:
      "Đại học FPT được thành lập vào năm 2006, đánh dấu một bước tiến quan trọng trong việc mở rộng quy mô đào tạo và cung cấp các chương trình Kỹ sư và Cử nhân đại học.",
  },
  {
    question:
      "FPT Education đã hợp tác với tổ chức quốc tế nào vào năm 2009 và chương trình đào tạo đó là gì?",
    answer:
      "Năm 2009, FPT Education hợp tác với Đại học Greenwich (Anh Quốc) để thành lập FPT Greenwich (nay là Greenwich Việt Nam), đào tạo Kỹ sư và Cử nhân lấy bằng do Đại học Greenwich cấp.",
  },
  {
    question:
      "FPT Polytechnic được thành lập vào năm nào và tập trung vào lĩnh vực gì?",
    answer:
      "FPT Polytechnic được thành lập vào năm 2010 và tập trung vào đào tạo Kỹ sư và Cử nhân Cao đẳng Thực hành, cung cấp các chương trình giáo dục thực tiễn và chuyên sâu.",
  },
  {
    question: "THPT FPT (Hòa Lạc) được thành lập với mô hình gì và vào năm nào?",
    answer: "THPT FPT (Hòa Lạc) được thành lập vào năm 2013 và hoạt động theo mô hình nội trú, đào tạo học sinh từ lớp 10 đến lớp 12.",
  },
];

function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="relative min-h-[300px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://kitpro.site/nacotta/wp-content/uploads/sites/190/2023/09/siluet-2.png')",
          opacity: "0.07",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "343px -80px",
        }}
      ></div>
      <div className="container py-[60px]">
        <Title
          title=""
          subtitle="Câu hỏi về FPT Education"
          align="center"
          className="mb-6"
        ></Title>
        <div
          className="relative mt-[60px] w-full border-4 border-solid transition-transform"
          style={{
            borderWidth: "6px 6px 0px 6px",
            borderColor: "#f0f2ed",
            borderRadius: "10px 10px 0px 0px",
            padding: "0px 60px 0px 60px",
          }}
        >
          <h2 className="absolute left-[60px] top-[-40px] bg-white pl-6 pr-[30%] text-[42px]">
            <span className="font-bold">Câu hỏi</span>{" "}
            <span className="font-bold">thường gặp</span>
          </h2>
          <div>
            <h3 className="mt-[40px] pr-[350px] opacity-80">
            FPT Education thành lập từ năm 1999, với sứ mệnh đào tạo nguồn nhân lực chất lượng cao, đáp ứng nhu cầu thị trường lao động hiện đại.
            </h3>
          </div>
          <div className="mt-[20px] flex flex-col gap-2">
            {questions.map((item, index) => (
              <QuestionDropDown
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonQuestions;
