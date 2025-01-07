import { Assistant } from "@/components/models/Assistant"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Suspense } from "react"

function Experience() {
  return (
    <>
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
      <OrbitControls/>
      <Suspense>
         <Assistant/>
      </Suspense>
    </Canvas>
    </>
  )
}

export default Experience