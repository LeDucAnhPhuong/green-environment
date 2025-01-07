import useStore from "@/store";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { Mesh } from "three";

function Room() {
  const setTargetPoint = useStore((state: any) => state?.setTargetPoint);

  const circleRef = useRef<Mesh>(null!);
  const date = useRef(0);

  const { scene }: any = useGLTF("/models/room.glb");

  return (
    <>
      <mesh ref={circleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.2, 0.3]} />
        <meshBasicMaterial color={0x000000} transparent opacity={0.25} />
      </mesh>
      <RigidBody type="fixed" colliders="trimesh" ccd>
        <primitive
          object={scene}
          scale={3}
          position={[0, 0, 0]}
          // rotation={[-Math.PI / 2, 0, 0]}
          onPointerMove={({ point }: any) => {
            if (circleRef.current?.position) {
              circleRef.current.position.z = point.z;
              circleRef.current.position.x = point.x;
              circleRef.current.position.y = point.y + 0.1;
            }
          }}
          onPointerDown={() => {
            date.current = Date.now();
          }}
          onDoubleClick={({ point }: any) => {
            // if (controllerMode === Controller3DEnum?.KEYBOARD) {
            //   return;
            // }
            if (Date.now() - date.current < 200) {
              //   clickAudio.toggle();
              setTargetPoint({
                x: point.x,
                y: point.y,
                z: point.z,
              });
            }
          }}
        />
      </RigidBody>
    </>
  );
}

export default Room;
