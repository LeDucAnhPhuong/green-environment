"use client";
import { CircleHelp } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionDropDown from "../HomePage/CommonQuestions/QuestionDropDown";
import { useState } from "react";

const questions = [
  {
    question: "FPT Education được thành lập vào năm nào và với mục tiêu gì?",
    answer:
      "FPT Education được thành lập vào năm 1999, với mục tiêu trở thành một trong ba mảng hoạt động cốt lõi của Tập đoàn FPT - một tập đoàn tiên phong trong lĩnh vực CNTT tại Việt Nam, và xây dựng thương hiệu giáo dục có tầm ảnh hưởng quốc tế.",
  },
  {
    question:
      "Mục đích của phòng tiển lãm 3D về 25 năm hành trình của FPT Education",
    answer:
      "Nơi lưu trữ những sự kiện theo dòng thời gian từ những năm 1999 đến nay, với các thể hiện và bố trí như một căn phòng có thật với hình thức 3D giúp người ghé thăm có cảm giác mới lạ và hiện đại",
  },
  {
    question: "Làm sao để duy chuyển trong phòng triển lãm 3D?",
    answer:
      "Bạn cần double click vào nền nhà, nơi bạn muốn di chuyển tới để tiến đến đối tượng mà bạn cần muốn xem gõ ở góc nhìn thứ nhất",
  },
  {
    question:
      "Tính năng tương tác được với khung ảnh có trong phòng triển lãm",
    answer:
      "Ngoài việc di chuyển xung quanh để xem các hình ảnh về sự kiện đã diễn ra trong vòng 25 qua, bạn có thể click vào khung ảnh muốn xem chi tiết để xem được rõ ràng nhất hình ảnh thông tin về sự kiện đó",
  },
  {
    question:
      "Chế độ hướng dẫn viên du lịch?",
    answer:
      "Ở chế độ hướng dẫn viên du lịch, bạn sẽ được một Hướng dẫn viên du lịch ở dạng Bot chat hỗ trợ tham quan viện bảo tàng 3D. Trực tiếp trò chuyện với hướng dẫn viên du lịch và tiếp nhận thông tin một cách dễ dàng.",
  },

];

function QuestionDialog() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full bg-primary/60 px-4 py-4 transition-all hover:bg-primary-dark">
          <div className="flex items-center gap-2">
            <CircleHelp className="text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[860px]">
        <DialogHeader>
          <DialogTitle>Bạn gặp vấn đề?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col gap-2">
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
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
export default QuestionDialog;
