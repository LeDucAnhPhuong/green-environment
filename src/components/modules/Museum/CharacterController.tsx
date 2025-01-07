import { useEffect, useMemo, useRef } from "react";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import useFollowCam from "@/hooks/useFollowCam";
import { Euler, Quaternion, Vector3 } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import useKeyboard from "@/hooks/useKeyboard";
import { calculateRotationVector } from "@/utils/calculateRotationVector";
import { calculateDistance } from "@/utils/calculateDistance";
import { Timmy } from "@/components/models/Timmy";
import useStore from "@/store";

const MOVEMENT_SPEED: number = 1;

function CharacterController() {
  const rigidbody: any = useRef();
  const characterRef: any = useRef();
  const euler = useMemo(() => new Euler(), []);
  const quat = useMemo(() => new Quaternion(), []);
  const velocity = useMemo(() => new Vector3(), []);
  const inputVelocity = useMemo(() => new Vector3(), []);
  //   const keyboard = useKeyboard();

  //   let myAngle = useMemo(() => 0, []);

  // const { targetPoint } = useAppSelector((state: any) => state?.controller3D);
  const targetPoint = useStore((state: any) => state?.targetPoint);
  const { yaw, isMoving } = useFollowCam(characterRef, [0, 2, 0]);

  const idleAnimations: any = useGLTF("/models/timmy.glb")?.animations;

  const walkingAnimations: any = useGLTF("/models/timmy.glb")?.animations;

  const idleActions = useAnimations(idleAnimations, characterRef).actions;
  const walkingActions = useAnimations(walkingAnimations, characterRef).actions;

  useEffect(() => {
    idleActions?.["IDLE"]?.play();
  }, [idleActions]);

  useEffect(() => {
    rigidbody?.current?.setTranslation(new Vector3(-15, 5, 0));
    rigidbody?.current.setRotation(new Vector3(0, Math.PI / 2, 0));
  }, []);

  useFrame((frameState, delta) => {
    // if (controllerMode === Controller3DEnum.KEYBOARD) {
    //   return;
    // }
    inputVelocity.set(0, 0, 0);
    inputVelocity.setLength(delta * 10);

    const rotationAngle = calculateRotationVector(
      rigidbody?.current?.translation(),
      targetPoint,
    );

    const distance = calculateDistance(
      rigidbody?.current?.translation(),
      targetPoint,
    );

    if (isMoving) {
      characterRef.current.rotation.y = Math.PI + yaw.rotation.y;
    }

    if (distance < 1) {
      walkingActions?.["WALK"]?.stop();
      idleActions?.["IDLE"]?.play();
      return;
    }

    walkingActions?.["WALK"]?.play();

    euler.y = yaw.rotation.y;
    quat.setFromEuler(euler);

    inputVelocity.applyQuaternion(quat);

    velocity.set(
      inputVelocity.x + rotationAngle.x,
      inputVelocity.y,
      inputVelocity.z + rotationAngle.z,
    );
    const impulse = {
      x: velocity.x * MOVEMENT_SPEED,
      y: 0,
      z: velocity.z * MOVEMENT_SPEED,
    };

    if (rotationAngle?.x > 0 && rotationAngle?.z > 0) {
      characterRef.current.rotation.y = rotationAngle.x;
    }
    if (rotationAngle?.x < 0 && rotationAngle?.z > 0) {
      characterRef.current.rotation.y = rotationAngle.x;
    }
    if (rotationAngle?.x > 0 && rotationAngle?.z < 0) {
      characterRef.current.rotation.y = Math.PI / 2 - rotationAngle.z;
    }
    if (rotationAngle?.x < 0 && rotationAngle?.z < 0) {
      characterRef.current.rotation.y = -Math.PI / 2 + rotationAngle.z;
    }
    rigidbody.current?.applyImpulse(impulse, true);
  });

  //   useFrame((frameState, delta) => {
  //     if (controllerMode === Controller3DEnum.MOUSE) {
  //       return;
  //     }
  //     inputVelocity.set(0, 0, 0);
  //     inputVelocity.setLength(delta * 10);
  //     if (isMoving) {
  //       characterRef.current.rotation.y = Math.PI + yaw.rotation.y;
  //     }

  //     idleActions?.["IDLE"]?.play();

  //     if (
  //       keyboard["KeyW"] ||
  //       keyboard["KeyS"] ||
  //       keyboard["KeyA"] ||
  //       keyboard["KeyD"]
  //     ) {
  //       if (keyboard["KeyW"]) {
  //         myAngle = Math.PI;
  //         inputVelocity.z = -1;
  //       }
  //       if (keyboard["KeyS"]) {
  //         myAngle = 0;
  //         inputVelocity.z = 1;
  //       }
  //       if (keyboard["KeyA"]) {
  //         myAngle = -Math.PI / 2;
  //         inputVelocity.x = -1;
  //       }
  //       if (keyboard["KeyD"]) {
  //         myAngle = Math.PI / 2;
  //         inputVelocity.x = 1;
  //       }
  //       idleActions?.["IDLE"]?.stop();
  //       walkingActions?.["WALK"]?.play();

  //       characterRef.current.rotation.y = myAngle + yaw.rotation.y;
  //     } else {
  //       walkingActions?.["WALK"]?.stop();
  //     }

  //     euler.y = yaw.rotation.y;
  //     quat.setFromEuler(euler);
  //     inputVelocity.applyQuaternion(quat);

  //     velocity.set(inputVelocity.x, inputVelocity.y, inputVelocity.z);
  //     const impulse = {
  //       x: inputVelocity.x * MOVEMENT_SPEED,
  //       y: 0,
  //       z: inputVelocity.z * MOVEMENT_SPEED,
  //     };

  //     rigidbody.current?.applyImpulse(impulse, true);
  //   });

  useFrame(() => {
    // if (rigidbody?.current?.translation()?.y < -2) {
    //   rigidbody?.current?.setTranslation(new Vector3(0, 2, 0));
    // }
  });

  return (
    <RigidBody
      ref={rigidbody}
      colliders={false}
      linearDamping={12}
      lockRotations
      type={"dynamic"}
    >
      <Timmy characterRef={characterRef} />
      <CapsuleCollider args={[0.5, 0.375]} position={[0, 1.28, 0]} />
    </RigidBody>
  );
}

export default CharacterController;
