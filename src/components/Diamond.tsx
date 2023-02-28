import { useMemo } from 'react'
import { Vector3 } from 'three'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry'

export const Diamond: React.FC<{ vertices: Vector3[] }> = ({ vertices, ...rest }) => {
  const geo = useMemo(() => {
    return new ConvexGeometry(vertices)
  }, [vertices])

  return (
    <>
      <mesh geometry={geo} {...rest} dispose={null}>
        <meshBasicMaterial
          attach="material"
          color={'#0033cc'}
        />
      </mesh>
      <mesh geometry={geo} {...rest} dispose={null}>
        <meshBasicMaterial
          attach="material"
          wireframe
          transparent
          color="white"
          wireframeLinewidth={0.8}
        />
      </mesh>
    </>
  )
}
