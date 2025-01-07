import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import Room from "./Room";
import CharacterController from "./CharacterController";
import PictureFrames from "./PictureFrames";

function Experience({ setIsShowDrawer, setContent }: any) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        // background:
        //   "radial-gradient(circle, rgba(149,149,149,1) 0%, rgba(24,24,24,1) 100%)",
      }}
    >
      <ambientLight intensity={3} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={4} />
      <Suspense>
        <Physics timeStep="vary" gravity={[0, -30, 0]}>
          <Room />
          <PictureFrames
            setIsShowDrawer={setIsShowDrawer}
            setContent={setContent}
          />
          <CharacterController />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default Experience;
