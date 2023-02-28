export const Globe:React.FC<{ radius?: number, opacity?: number }> = ({ radius = 1, opacity = 0.1 }) => {
  return (
    <mesh scale={radius}>
      <sphereBufferGeometry />
      <meshStandardMaterial wireframe wireframeLinewidth={0.5} transparent opacity={opacity} />
    </mesh>
  );
};
