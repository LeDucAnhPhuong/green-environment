import { useGLTF } from "@react-three/drei";

interface Props {
  characterRef?: any;
}

export function Timmy({ characterRef }: Props) {
  const { nodes, materials }: any = useGLTF("/models/timmy.glb");

  return (
    <group ref={characterRef} dispose={null} position={[0, 0.5, 0]} scale={1}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
          <group name="BOY">
            <skinnedMesh
              name="Cube003"
              geometry={nodes.Cube003.geometry}
              material={materials["s.002"]}
              skeleton={nodes.Cube003.skeleton}
              morphTargetDictionary={nodes.Cube003.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_1"
              geometry={nodes.Cube003_1.geometry}
              material={materials["white.002"]}
              skeleton={nodes.Cube003_1.skeleton}
              morphTargetDictionary={nodes.Cube003_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_2"
              geometry={nodes.Cube003_2.geometry}
              material={materials["r.002"]}
              skeleton={nodes.Cube003_2.skeleton}
              morphTargetDictionary={nodes.Cube003_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_3"
              geometry={nodes.Cube003_3.geometry}
              material={materials["Material.013"]}
              skeleton={nodes.Cube003_3.skeleton}
              morphTargetDictionary={nodes.Cube003_3.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_4"
              geometry={nodes.Cube003_4.geometry}
              material={materials["h.002"]}
              skeleton={nodes.Cube003_4.skeleton}
              morphTargetDictionary={nodes.Cube003_4.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_4.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_5"
              geometry={nodes.Cube003_5.geometry}
              material={materials["Material.014"]}
              skeleton={nodes.Cube003_5.skeleton}
              morphTargetDictionary={nodes.Cube003_5.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_5.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_6"
              geometry={nodes.Cube003_6.geometry}
              material={materials["Material.015"]}
              skeleton={nodes.Cube003_6.skeleton}
              morphTargetDictionary={nodes.Cube003_6.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_6.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_7"
              geometry={nodes.Cube003_7.geometry}
              material={materials["Material.016"]}
              skeleton={nodes.Cube003_7.skeleton}
              morphTargetDictionary={nodes.Cube003_7.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_7.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_8"
              geometry={nodes.Cube003_8.geometry}
              material={materials["s-c.002"]}
              skeleton={nodes.Cube003_8.skeleton}
              morphTargetDictionary={nodes.Cube003_8.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_8.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_9"
              geometry={nodes.Cube003_9.geometry}
              material={materials["Material.017"]}
              skeleton={nodes.Cube003_9.skeleton}
              morphTargetDictionary={nodes.Cube003_9.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_9.morphTargetInfluences}
            />
            <skinnedMesh
              name="Cube003_10"
              geometry={nodes.Cube003_10.geometry}
              material={materials["Material.018"]}
              skeleton={nodes.Cube003_10.skeleton}
              morphTargetDictionary={nodes.Cube003_10.morphTargetDictionary}
              morphTargetInfluences={nodes.Cube003_10.morphTargetInfluences}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/timmy.glb");
