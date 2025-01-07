'use client'

import { Button } from "@/components/ui/button"
import { useChat } from "ai/react"
import { useRef, useEffect } from 'react'
import TranscriptAI from "./TranscriptAI"
import TextToSpeedAI from "./TextToSpeedAI"

interface ChildRef {
    handleCheck: (newMessage: string) => void;
}
export function Chat() {

    const childRef = useRef<ChildRef>(null);

    const callChildMethod = () => {
        if (childRef.current) {
            const newMessage = "Updated message from Parent";
            childRef.current.handleCheck(newMessage); // Call the method in the child component with a new message
        }
    }

    const { messages, input,  append ,handleInputChange, handleSubmit } = useChat({
        api: 'api/ex4',
        onError: (e) => {
            console.log(e)
        },
        onFinish(message) {
            if (childRef.current) {
                childRef.current.handleCheck(message.content); // Call the method in the child component with a new message
            }
        },
    })


    const chatParent = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })

    const handleSubmitUser = (data:string) => {
        debugger
        if (data.trim() !== '') {
            // Assuming append function is provided by useChat to append a user message
            append({ content: data, role: 'user' });
            // Optionally clear input after sending
        }
    };
    return (
        <main className="flex flex-col w-full h-screen max-h-dvh bg-background">

            <header className="p-4 border-b w-full max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold">LangChain Chat</h1>
            </header>

            <section className="p-4">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <input className="flex-1 min-h-[40px]" placeholder="Type your question here..." type="text" value={input} onChange={handleInputChange} />
                    <Button className="ml-2" type="submit">
                        Submit
                    </Button>
                </form>
            </section>

            <section className="container h-[50] px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
                <ul ref={chatParent} className="h-full p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-primary">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rounded-xl flex-col gap-5 p-4 bg-background shadow-md flex w-3/4">
                                        <p className="text-primary">{m.content}</p>
                                        <TextToSpeedAI ref={childRef} />
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                </ul >
            </section>
            {/* <TranscriptAI handleSubmitUser={handleSubmitUser}/> */}
           
        </main>
    )
}
