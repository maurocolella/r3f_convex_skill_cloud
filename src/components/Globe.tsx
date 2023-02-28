export const Globe:React.FC<{ radius?: number }> = ({ radius = 1 }) => {
  return (
    <mesh scale={radius}>
      <sphereBufferGeometry />
      <meshStandardMaterial wireframe wireframeLinewidth={0.5} transparent opacity={0.1} />
    </mesh>
  );
};
