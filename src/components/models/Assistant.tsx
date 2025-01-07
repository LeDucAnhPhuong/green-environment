import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import useStore from "@/store";

export function Assistant() {
  const characterRef: any = useRef();

  const { nodes, materials }: any = useGLTF("models/assistant.glb");

  const { animations } = useGLTF("/models/animations.glb");

  const idleActions = useAnimations(animations, characterRef).actions;

  const isTalking = useStore((state: any) => state?.isTalking);

  useEffect(() => {
    console.log("idleActions", idleActions);
    console.log("idleAnimations", animations);
    idleActions?.["Idle"]?.play();
  }, []);

  useEffect(() => {
    if (isTalking) {
     
      idleActions?.["Idle"]?.fadeOut(2);
      setTimeout(() => {
       
        idleActions?.["Talking_1"]?.fadeIn(2);
        idleActions?.["Talking_1"]?.play();
      }, 2000);
    } else {
      idleActions?.["Talking_1"]?.stop();

      setTimeout(() => {
        console.log('====================================');
        console.log("Idle");
        console.log('====================================');
        idleActions?.["Idle"]?.fadeIn(2);
        // idleActions?.["Idle"]?.play();

        // idleActions?.["Idle"]?.play();
      }, 2000);
    }
  }, [isTalking]);

  return (
    <group dispose={null} scale={5} position={[0, -6.5, 0]} ref={characterRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
    </group>
  );
}
