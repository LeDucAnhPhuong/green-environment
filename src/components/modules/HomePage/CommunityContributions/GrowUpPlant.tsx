import useStore from "@/store";
import Plant from "@public/svgr/Plant";
import PlantEight from "@public/svgr/Prames/PlantEight";
import PlantFive from "@public/svgr/Prames/PlantFive";
import PlantFour from "@public/svgr/Prames/PlantFour";
import PlantNine from "@public/svgr/Prames/PlantNine";
import PlantOne from "@public/svgr/Prames/PlantOne";
import PlantSeven from "@public/svgr/Prames/PlantSeven";
import PlantSix from "@public/svgr/Prames/PlantSix";
import PlantThree from "@public/svgr/Prames/PlantThree";
import PlantTwo from "@public/svgr/Prames/PlantTwo";
import React, { useState, useEffect } from "react";

interface IProps {
  isLove: boolean;
  closeModal: () => void;
  setIsOpenCamera: (openCamera: boolean) => void;
}

const plants = [
  { component: PlantOne, width: 175, bottom: 42, left: 126, delay: 0 },
  { component: PlantTwo, width: 32, bottom: 86, left: 190, delay: 300 },
  { component: PlantThree, width: 185, bottom: 99.5, left: 34, delay: 600 },
  { component: PlantFour, width: 171, bottom: 92.5, left: 191, delay: 900 },
  { component: PlantFive, width: 166, bottom: 140, left: 194.5, delay: 1200 },
  { component: PlantSix, width: 150, bottom: 167, left: 55.5, delay: 1500 },
  { component: PlantSeven, width: 105, bottom: 178, left: 106, delay: 1800 },
  { component: PlantEight, width: 94, bottom: 210, left: 197, delay: 2400 },
  { component: PlantNine, width: 102, bottom: 228, left: 155, delay: 2900 },
];

function GrowUpPlant({ isLove, closeModal, setIsOpenCamera }: IProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [showText, setShowText] = useState<string | null>(null);
  console.log(showText);
  console.log(currentStage);
  useEffect(() => {
    if (isLove) {
      const interval = setInterval(() => {
        setCurrentStage((prev) => {
          if (prev < plants.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLove]);

  const { setOpenMessageDiaolog } = useStore((state) => ({
    setOpenMessageDiaolog: state.setOpenMessageDiaolog,
  }));

  useEffect(() => {
    if (currentStage === plants.length) {
      setTimeout(() => {
        closeModal();
        setIsOpenCamera(false);
        setOpenMessageDiaolog(true);
      }, 8000);
    }
  }, [currentStage]);

  return (
    <div className="h-fit w-fit">
      <div className="relative">
        <Plant />
        {plants.slice(0, currentStage).map((plant, index) => {
          const PlantComponent = plant.component;
          return (
            <div
              key={index}
              className="absolute animate-fade"
              style={{
                bottom: `${plant.bottom}px`,
                left: `${plant.left}px`,
                animationDelay: `${plant.delay}ms`,
              }}
            >
              <PlantComponent width={plant.width} />
            </div>
          );
        })}
        {isLove && (
          (
            <div className="absolute bottom-[10px] animate-fade w-full">
              <p className="text-center text-primary">{
                  currentStage < 9 ? "Bạn đang giúp cây xanh sắc trở lại 💚" : "Cảm ơn bạn đã giúp cây xanh tốt trở lại 💚"
                }</p>
            </div>
          )
        ) }
        {currentStage === plants.length && (
          (
            <div className="absolute bottom-[10px] animate-fade w-full">
              <p className="text-center text-primary">
                  Cảm ơn bạn đã giúp cây xanh tốt trở lại 💚
                </p>
            </div>
          )
        ) }
      </div>
    </div>
  );
}

export default GrowUpPlant;
