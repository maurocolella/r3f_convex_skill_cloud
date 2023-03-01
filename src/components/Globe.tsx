interface globeProps {
  radius?: number
  opacity?: number
  depthTest?: boolean
}

export const Globe:React.FC<globeProps> = ({ radius = 1, opacity = 0.1, depthTest = true }) => {
  return (
    <mesh scale={radius}>
      <sphereGeometry />
      <meshStandardMaterial
        wireframe
        wireframeLinewidth={0.5}
        transparent
        opacity={opacity}
        depthTest={depthTest}
      />
    </mesh>
  );
};
