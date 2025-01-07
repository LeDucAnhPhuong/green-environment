"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SaveGreenImage from "@public/images/savegreen.png";
import { PersonStanding, Trees, UserRound } from "lucide-react";
import Plant from "@public/svgr/Plant";
import GrowUpPlant from "./GrowUpPlant";
import useModal from "@/hooks/useModal";
import ContributeDialog from "./ContributeDialog";

import {
  DrawingUtils,
  FilesetResolver,
  GestureRecognizer,
  GestureRecognizerResult,
} from "@mediapipe/tasks-vision";
import MessageDialog from "./MessageDialog";
import useStore from "@/store";



interface IProps {
  openCamera?: boolean;
  setIsOpenCamera: (openCamera: boolean) => void;
  closeModal: () => void;
}

type GestureRecognizerType = GestureRecognizer | undefined;

function Camera({ openCamera, closeModal, setIsOpenCamera }: IProps) {
  const [userAction, setUserAction] = useState<string>("");
  const [showLove, setShowLove] = useState(false);
  const [showLike, setShowLike] = useState(false);

  const demosSection = useRef<any>(null);
  const [gestureRecognizer, setGestureRecognizer] =
    useState<GestureRecognizerType>();
  const [webcamRunning, setWebcamRunning] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const [lastVideoTime, setLastVideoTime] = useState(-1);
  const [results, setResults] = useState<GestureRecognizerResult | undefined>(
    undefined,
  );

  const createGestureRecognizer = async () => {
    try {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm",
      );

      const gest = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 2,
      });

      setGestureRecognizer(gest);
      demosSection.current?.classList.remove("invisible");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createGestureRecognizer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasGetUserMedia = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  const handleWebcam = () => {
    if (hasGetUserMedia()) {
      enableCam();
    } else {
      console.warn("getUserMedia() is not supported by your browser");
    }
  };
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const enableCam = async () => {
    if (!gestureRecognizer) {
      return;
    }

    if (webcamRunning) {
      // Stop the webcam
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      setWebcamRunning(false);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      return; // Exit the function after stopping the webcam
    } else {
      setWebcamRunning(true);
    }
    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current?.addEventListener("loadeddata", predictWebcam);
        console.log(videoRef.current);
      }
    });
  };

  const predictWebcam = async () => {
    if (!videoRef.current) return;
    if (!gestureRecognizer) return;
    if (!canvasElementRef.current) return;
    if (videoRef.current.videoWidth <= 0 || videoRef.current.videoHeight <= 0) {
      console.error("Video dimensions are not valid");
      return;
    }

    let newResults = results;
    const webcamElement = document.getElementById("webcam");
    let nowInMs = Date.now();
    if (videoRef.current.currentTime !== lastVideoTime) {
      setLastVideoTime(videoRef.current.currentTime);
      newResults = gestureRecognizer.recognizeForVideo(
        videoRef.current,
        nowInMs,
      );
    }
    // Ensure the video has valid dimensions

    if (newResults && newResults.gestures?.[0]?.[0]?.categoryName) {
      if (newResults.gestures[0][0].categoryName === "Thumb_Up") {
        setUserAction(newResults.gestures[0][0].categoryName);
      }
    }

    const canvasCtx = canvasElementRef.current?.getContext("2d");
    if (!canvasCtx) return;
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasElementRef.current.width,
      canvasElementRef.current.height,
    );
    const drawingUtils = new DrawingUtils(canvasCtx);
    if (!webcamElement) return;
    canvasElementRef.current.style.height = "100%";
    webcamElement.style.height = "100%";
    canvasElementRef.current.style.width = "100%";
    webcamElement.style.width = "100%";
    webcamElement.style.objectFit = "cover";

    if (newResults && newResults.landmarks) {
      for (const landmarks of newResults.landmarks) {
        drawingUtils.drawConnectors(
          landmarks,
          GestureRecognizer.HAND_CONNECTIONS,
          {
            color: "#00FF00",
            lineWidth: 5,
          },
        );
        drawingUtils.drawLandmarks(landmarks, {
          color: "#FF0000",
          lineWidth: 2,
        });
      }
    }
    canvasCtx.restore();

    if (webcamRunning === true) {
      window.requestAnimationFrame(predictWebcam);
    }

    if (newResults && newResults.landmarks) {
      //
      const landmark0_3 = newResults.landmarks[0]?.[3];
      const landmark0_6 = newResults.landmarks[0]?.[6];
      const landmark0_7 = newResults.landmarks[0]?.[7];

      //
      const landmark0_4 = newResults.landmarks[0]?.[4];
      const landmark1_8 = newResults.landmarks[1]?.[8];
      const landmark1_4 = newResults.landmarks[1]?.[4];
      const landmark0_8 = newResults.landmarks[0]?.[8];

      if (landmark0_8) {
        const nextButton = {
          x: 0.09411006420850754,
          y: 0.5331868529319763,
        };
        const prevButton = {
          x: 0.9059846997261047,
          y: 0.5252099633216858,
        };
        //right hand
        if (
          Math.abs(landmark0_8.x - nextButton.x) <= 0.06 &&
          Math.abs(landmark0_8.y - nextButton.y) <= 0.06
        ) {
        } else {
        }
        if (
          Math.abs(landmark0_8.x - prevButton.x) <= 0.06 &&
          Math.abs(landmark0_8.y - prevButton.y) <= 0.06
        ) {
        } else {
          setUserAction("");
        }
      }

      if (landmark1_8) {
        const nextButton = {
          x: 0.09411006420850754,
          y: 0.5331868529319763,
        };
        const prevButton = {
          x: 0.9059846997261047,
          y: 0.5252099633216858,
        };

        //left hand
        if (
          Math.abs(landmark1_8.x - nextButton.x) <= 0.06 &&
          Math.abs(landmark1_8.y - nextButton.y) <= 0.06
        ) {
        } else {
        }
        if (
          Math.abs(landmark1_8.x - prevButton.x) <= 0.06 &&
          Math.abs(landmark1_8.y - prevButton.y) <= 0.06
        ) {
        } else {
          setUserAction("");
        }
      }
      if (
        landmark0_3 &&
        landmark0_6 &&
        landmark0_7 &&
        landmark0_8 &&
        landmark0_4
      ) {
        if (
          Math.abs(landmark0_3?.x - (landmark0_6?.x + landmark0_7?.x) / 2) <=
            0.03 &&
          Math.abs(landmark0_3?.y - (landmark0_6?.y + landmark0_7?.y) / 2) <=
            0.03 &&
          Math.abs(landmark0_4?.x - landmark0_8?.x) >= 0.07
        ) {
          setUserAction("love");
        }
      }

      if (landmark0_4 && landmark1_8 && landmark1_4 && landmark0_8) {
        const x0_4 = landmark0_4.x;
        const y0_4 = landmark0_4.y;
        const x1_8 = landmark1_8.x;
        const y1_8 = landmark1_8.y;
        const x1_4 = landmark1_4.x;
        const y1_4 = landmark1_4.y;
        const x0_8 = landmark0_8.x;
        const y0_8 = landmark0_8.y;

        if (
          Math.abs(landmark0_4?.x - landmark1_4?.x) <= 0.03 &&
          Math.abs(landmark0_4?.y - landmark1_4?.y) <= 0.03 &&
          Math.abs(landmark0_8?.x - landmark1_8?.x) <= 0.03 &&
          Math.abs(landmark0_8?.y - landmark1_8?.y) <= 0.03 &&
          Math.abs(landmark0_8?.y - landmark0_4?.y) >= 0.1
        ) {
          setUserAction("love");
        }

        if (
          Math.abs(x0_4 - x1_8) < 0.03 &&
          Math.abs(x1_4 - x0_8) < 0.03 &&
          Math.abs(y0_4 - y1_8) < 0.03 &&
          Math.abs(y1_4 - y0_8) < 0.03
        ) {
        }
      }
    }

    setResults(newResults);
  };

  useEffect(() => {
    if (openCamera) {
      handleWebcam();
    } else {
      handleWebcam();
      return;
    }
  }, [openCamera]);


  useEffect(() => {
    if (userAction === "love") {
      setShowLove(true);
    
    } else {
      setShowLove(false);
    }
  }, [userAction]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  },[openCamera])



  return (<div className="w-full scrollbar-hide">
    {webcamRunning ? (
      <div className="flex flex-row gap-4 justify-between scrollbar-hide animate-fade">
        <div className="relative w-[50%] smooth-transition">
          <span className="max-h-20 max-w-20">
            <video
              id="webcam"
              height={200}
              autoPlay
              playsInline
              ref={videoRef}
              onLoadedData={predictWebcam}
              className="animate-fade rounded-lg"
              style={{ transform: "rotateY(180deg)", maxWidth: "100%" }}
            ></video>
          </span>
          <span>
            <canvas
              ref={canvasElementRef}
              className="output_canvas"
              id="output_canvas"
              width="800"
              height="720"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: "rotateY(180deg)",
                maxWidth: "100%",
              }}
            ></canvas>
          </span>
        </div>
        {isLoading ? (
         ""
        ) : (
          <div className="w-[50%] bg-background border-3 rounded-lg flex items-center justify-center smooth-transition">
            <div>
              <GrowUpPlant setIsOpenCamera={setIsOpenCamera} closeModal={closeModal} isLove={showLove} />
            </div>
          </div>
        )}
      </div>
    ) : null}
  </div>
  
  );
}

export default Camera;