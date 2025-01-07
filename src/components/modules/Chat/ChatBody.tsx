import TextToSpeedAI from "@/components/AI/TextToSpeedAI";
import TranscriptAI from "@/components/AI/TranscriptAI";
import { Message } from "ai";
import { Speaker, Volume2 } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface ChatBodyProps {
  messages: Message[];
  childRef: any;
  chatParent: any;
}
const ChatBody: React.FC<ChatBodyProps> = ({
  messages,
  childRef,
  chatParent
}) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 bg-green-100/20">
      <main className="flex h-fit w-full flex-col bg-background">
        <section className="p-4"></section>

        <section className="container mx-auto flex h-[430px] max-w-3xl flex-grow flex-col gap-4 overflow-y-scroll px-0 pb-10">
          <ul
            ref={chatParent}
            className="flex h-full flex-grow flex-col gap-4 rounded-lg bg-muted/50 p-4"
          >
            {messages.map((m, index) => (
              <div key={index}>
                {m.role === "user" ? (
                    <li key={m.id} className="flex flex-row-reverse">
                    <div className=" rounded-xl bg-background p-4 shadow-md">
                    <p className="  text-primary">{m.content}</p>
                    </div>
                  </li>
                 
                ) : (
                  <li key={m.id} className="flex flex-col content-center">
                  <div className="mb-4 w-[90%] flex flex-col gap-5 rounded-xl bg-background p-4">       
                    <span className="text-black br-spacing" dangerouslySetInnerHTML={{ __html: m.content }} />
                    <TextToSpeedAI ref={childRef} />
                  </div>
                
                </li>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </ul>
        </section>
     
      </main>
    </div>
  );
};

export default ChatBody;
