import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { Object3D, Vector3 } from "three";

export default function useFollowCam(ref: any, offset: number[]) {
  const { scene, camera } = useThree();

  const pivot = useMemo(() => new Object3D(), []);
  const alt = useMemo(() => new Object3D(), []);
  const yaw = useMemo(() => new Object3D(), []);
  const pitch = useMemo(() => new Object3D(), []);
  const worldPosition = useMemo(() => new Vector3(), []);
  const [isMoving, setIsMoving] = useState(false);

  let isClicked = useMemo(() => false, []);

  function onDocumentMouseMove(e: MouseEvent) {
    if (isClicked) {
      setIsMoving(true);
      yaw.rotation.y -= e.movementX * 0.002;
      const v = pitch.rotation.x - e.movementY * 0.002;
      if (v > -0.5 && v < 0.5) {
        pitch.rotation.x = v;
      }
    }
  }

  function onDocumentMouseDown() {
    isClicked = true;
  }
  function onDocumentMouseUp() {
    isClicked = false;
    setIsMoving(false);
  }
  useEffect(() => {
    scene.add(pivot);
    pivot.add(alt);

    alt.position.x = offset[0];
    alt.position.y = offset[1];
    alt.position.z = offset[2];

    alt.add(yaw);

    yaw.rotation.y = -Math.PI / 2;

    camera.position.z = 0;
    camera.position.y = 4;

    yaw.add(pitch);
    pitch.add(camera);
    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mousedown", onDocumentMouseDown);
    document.addEventListener("mouseup", onDocumentMouseUp);
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mousedown", onDocumentMouseDown);
      document.removeEventListener("mouseup", onDocumentMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, ref.current]);

  useFrame((_, delta) => {
    ref.current.getWorldPosition(worldPosition);
    pivot.position.lerp(worldPosition, delta * 5);
  });

  return { pivot, alt, yaw, pitch, isMoving };
}
