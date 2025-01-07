"use client";

import { Button } from "@/components/ui/button";
import { BotMessageSquare, MoveLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import logo from "@public/images/logo-white.png";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useEffect, useRef } from "react";

import { useChat } from "ai/react";
import Experience from "./Experience";

interface ChildRef {
  handleCheck: (newMessage: string) => void;
}

function Chat() {
  const childRef = useRef<ChildRef>(null);

  const { messages, input, append, handleInputChange, handleSubmit } = useChat({
    api: "api/ex4",
    onError: (e) => {
      console.log(e);
    },
    onFinish(message) {
      if (childRef.current) {
        childRef.current.handleCheck(message.content); // Call the method in the child component with a new message
      }
    },
  });

  const handleSubmitUser = (data: string) => {
    if (data.trim() !== "") {
      append({ content: data, role: "user" });
      return true;
    }
    return false;
  };

  const chatParent = useRef<HTMLUListElement>(null);

  return (
    <div className="fixed bottom-10 right-20 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer rounded-full bg-primary px-4 py-4 transition-all hover:bg-primary-dark">
            <div className="flex items-center gap-2">
              <BotMessageSquare className="text-white" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          close={false}
          className="min-h-[600px] max-w-6xl bg-white/20 outline-none backdrop-blur-xl"
        >
          <div className="flex gap-5">
            <div className="flex flex-1 flex-col">
              <div className="mt-5 flex items-end justify-between">
                <h5 className="font-title text-2xl text-white">Trợ lý ảo</h5>
                <span className="text-white/70">Verson 1.0</span>
              </div>
              <div className="flex-1">
                <Experience />
              </div>
              {/* <div>
                <Image src={logo} alt="" height={52} />
              </div> */}
            </div>
            <div className="flex flex-[2] flex-col rounded-md bg-white">
              <ChatHeader />
              <ChatBody
                messages={messages}
                childRef={childRef}
                chatParent={chatParent}
              />
              <ChatFooter
                handleSubmit={handleSubmit}
                input={input}
                handleInputChange={handleInputChange}
                handleSubmitUser={handleSubmitUser}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Chat;
