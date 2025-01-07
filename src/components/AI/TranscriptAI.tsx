"use client";

import { useEffect, useRef, useState } from "react";
import {
  LiveConnectionState,
  LiveTranscriptionEvent,
  LiveTranscriptionEvents,
  useDeepgram,
} from "@/components/context/DeepgramContextProvider";
import {
  MicrophoneEvents,
  MicrophoneState,
  useMicrophone,
} from "@/components/context/MicrophoneContextProvider";
import Visualizer from "./Visualizer";
import { useChat } from "ai/react";

type SentMessageType = {
  handleSubmitUser: any;
  isStopMic: boolean;
  handleDisbleVoiceChat : any
};

const TranscriptAI: React.FC<SentMessageType> = ({
  handleSubmitUser,
  isStopMic,
  handleDisbleVoiceChat
}) => {
  const [caption, setCaption] = useState<string | undefined>("Powered by fuse");
  const [history, setHistory] = useState<string[]>([]);
  const { connection, connectToDeepgram, connectionState } = useDeepgram();
  const {
    setupMicrophone,
    microphone,
    startMicrophone,
    stopMicrophone,
    focesStopMicro,
    microphoneState,
  } = useMicrophone();
  const captionTimeout = useRef<any>();
  const keepAliveInterval = useRef<any>();

  ///

  const handleSentAIMessage = (data: string) => {
    let status = handleSubmitUser(data);

    if(!status) return ;
    
    handleDisbleVoiceChat();
  };

  ///
  useEffect(()=>{

    if(isStopMic) stopMicrophone();
    else startMicrophone()

  },[isStopMic])

  useEffect(() => {
    setupMicrophone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (microphoneState === MicrophoneState.Ready) {
      connectToDeepgram({
        model: "nova-2",
        language: "vi",
        interim_results: true,
        smart_format: true,
        filler_words: true,
        utterance_end_ms: 3000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [microphoneState]);



  useEffect(() => {
    if (!microphone) return;
    if (!connection) return;

    const onData = (e: BlobEvent) => {
      connection?.send(e.data);
    };

    const onTranscript = (data: LiveTranscriptionEvent) => {
      const { is_final: isFinal, speech_final: speechFinal } = data;
      let thisCaption = data.channel.alternatives[0].transcript;

      console.log("thisCaption", thisCaption);
      if (thisCaption !== "") {
        console.log('thisCaption !== ""', thisCaption);
        setCaption(thisCaption);
      }

      if (isFinal && speechFinal) {
        clearTimeout(captionTimeout.current);
        captionTimeout.current = setTimeout(() => {
          setCaption(undefined);
          clearTimeout(captionTimeout.current);
        }, 3000);

        // Update the history state with the final transcript
        handleSentAIMessage(thisCaption);
     
        setHistory((prevHistory) => [...prevHistory, thisCaption]);
      }
    };

    if (connectionState === LiveConnectionState.OPEN) {
      connection.addListener(LiveTranscriptionEvents.Transcript, onTranscript);
      microphone.addEventListener(MicrophoneEvents.DataAvailable, onData);

      startMicrophone();
    }

    return () => {
      connection.removeListener(
        LiveTranscriptionEvents.Transcript,
        onTranscript,
      );
      microphone.removeEventListener(MicrophoneEvents.DataAvailable, onData);
      clearTimeout(captionTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionState]);

  useEffect(() => {
    if (!connection) return;

    if (
      microphoneState !== MicrophoneState.Open &&
      connectionState === LiveConnectionState.OPEN
    ) {
      connection.keepAlive();

      keepAliveInterval.current = setInterval(() => {
        connection.keepAlive();
      }, 10000);
    } else {
      clearInterval(keepAliveInterval.current);
    }

    return () => {
      clearInterval(keepAliveInterval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [microphoneState, connectionState]);


  return (
    <>
      <div className="flex h-[50px] hidden w-full antialiased">
        <div className="flex h-full w-full flex-row overflow-x-hidden">
          <div className="flex h-full flex-auto flex-col">
            <div className="relative h-full w-full">
              {microphone && <Visualizer microphone={microphone} />}
              {/* <div className="absolute inset-x-0 bottom-[8rem] mx-auto max-w-4xl text-center">
                {caption && <span className="bg-black/70 p-8">{caption}</span>}
              </div> */}
            </div>
            <div className="history-container">
              {/* <h2>Lịch sử giao tiếp:</h2>
              <ul>
                {history.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranscriptAI;
