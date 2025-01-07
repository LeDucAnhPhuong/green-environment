"use client";

import TranscriptAI from "@/components/AI/TranscriptAI";
import { cn } from "@/lib/utils";
import { Mic, SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

interface ChatFooterProps {
  handleSubmit: any;
  input: any;
  handleInputChange: any;
  handleSubmitUser: any;
}

const ChatFooter: React.FC<ChatFooterProps> = ({
  handleInputChange,
  input,
  handleSubmit,
  handleSubmitUser,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };
  
  const [isVoiceChatStop, setIsVoiceChatStop] = useState(true);

  const handleDisalbeVoiceChat = () =>{
    setIsVoiceChatStop(true);
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-green-100/20 px-4 py-4">
        <div className="flex h-fit items-end gap-4 rounded-lg bg-white px-4 py-4 drop-shadow-2xl">
          <div onClick={()=>{setIsVoiceChatStop(!isVoiceChatStop)}} className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full bg-primary">
            <Mic  className={cn("text-white",
              !isVoiceChatStop && "animate-ping"
            )} size={16} />
          </div>
          
            <ReactTextareaAutosize
              placeholder="Type your question here..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="mb-1 flex-1 outline-none"
            />
            <TranscriptAI handleSubmitUser={handleSubmitUser} handleDisbleVoiceChat={handleDisalbeVoiceChat} isStopMic={isVoiceChatStop} />
         
          <button className="mb-1" type="submit">
            <SendHorizonal className="text-primary" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatFooter;
