"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  ForwardRefRenderFunction,
} from "react";

import AudioPlayer from "./AudioPlayer";
import HistoryList from "../organisms/HistoryList";
import { log } from "console";
import { Message } from "ai";
import { Volume2 } from "lucide-react";
import useStore from "@/store";
interface HistoryItem {
  id: number;
  text: string;
  model: string;
  voice: string;
  speed: number;
  timestamp: string;
  audioUrl: string;
}

interface TextToSpeedAIProps {
  
}

interface ChildProps {
  initialMessage: string;
}

export interface ChildRef {
  handleCheck: (newMessage: string) => void;
}

const TextToSpeedAI = forwardRef<ChildRef, TextToSpeedAIProps>((props, ref) => {
  const [apiKey, setApiKey] = useState("");
  const [text, setText] = useState("");
  const [model, setModel] = useState("tts-1");
  const [voice, setVoice] = useState("nova");
  const [speed, setSpeed] = useState(1);
  const [audioUrl, setAudioUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const setIsTalking = useStore((state: any) => state?.setIsTalking);


  useEffect(() => {
    const storedApiKey = localStorage.getItem("apiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const models = ["tts-1", "tts-1-hd"];
  const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

  ////////////////////////////////////

  // Expose methods to the parent through useImperativeHandle
  useImperativeHandle(ref, () => ({
    handleCheck(data: string) {
      generateSpeech(data);
    },
  }));

  const generateSpeech = async (data: string) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"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"}`,
        },
        body: JSON.stringify({
          model,
            input: "[Vietnamese]"+ data,
          voice,
          speed,
          language: "vi",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate speech");
      }

      setIsTalking(true);

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      const newHistoryItem: HistoryItem = {
        id: Date.now(),
        text,
        model,
        voice,
        speed,
        timestamp: new Date().toLocaleString(),
        audioUrl: url,
      };
      setHistory((prevHistory) => [newHistoryItem, ...prevHistory]);
    } catch (error) {
      console.error("Error generating speech:", error);
      setError((error as Error).message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnded = () => {
    setCurrentlyPlaying(null);
    // setIsTalking(false);
  };

  const handlePlay = (url: string) => {
    if (currentlyPlaying) {
      const audio = new Audio(currentlyPlaying);
      audio.pause();
    }
    const newAudio = new Audio(url);
    newAudio.onended = handleEnded;
    newAudio.play();
    setCurrentlyPlaying(url);
  };

  const handlePause = () => {
    if (currentlyPlaying) {
      const audio = new Audio(currentlyPlaying);
      audio.pause();
      setCurrentlyPlaying(null);
    }
  };

  const handleDelete = (id: number) => {
    setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "audio.mp3";
    link.click();
  };

  return (
    <>
      
      <AudioPlayer
        src={audioUrl}
        onEnded={handleEnded}
        className=" w-full mt-4"
      />
      {/* <HistoryList
        history={history}
        onPlay={handlePlay}
        onPause={handlePause}
        onDelete={handleDelete}
        onDownload={handleDownload}
        currentlyPlaying={currentlyPlaying}
      /> */}
    </>
  );
});

export default TextToSpeedAI;
