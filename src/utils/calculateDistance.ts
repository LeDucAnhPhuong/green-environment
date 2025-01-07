export const calculateDistance = (currentPos: any, targetPos: any) => {
  const dx = targetPos?.x - currentPos?.x;
  const dz = targetPos?.z - currentPos?.z;

  const distance = Math.sqrt(dx * dx + dz * dz);

  return distance;
};
