export const calculateRotationVector = (currentPos: any, targetPos: any) => {
  const dx = targetPos?.x - currentPos?.x;
  const dz = targetPos?.z - currentPos?.z;

  const direction = {
    x: dx,
    y: 0,
    z: dz,
  };
  const magnitude = Math.sqrt(
    direction.x * direction.x + direction.z * direction.z,
  );
  if (magnitude !== 0) {
    direction.x /= magnitude;
    direction.z /= magnitude;
  }

  return direction;
};
