import robot from "@public/images/robot.webp";
import { Bot } from "lucide-react";
import Image from "next/image";

function ChatHeader() {
  return (
    <div className="w-full border-b-[1px] border-b-slate-300 px-8 py-4">
      <div className="flex items-center gap-4">
        {/* <Image
          width={40}
          height={40}
          alt=""
          src={robot}
          className="h-10 w-10 rounded-full"
        /> */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Bot className="text-white" />
        </div>
        <p className="text-lg font-medium">Giải đáp FPT Education</p>
      </div>
    </div>
  );
}

export default ChatHeader;
