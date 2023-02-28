import { useMemo } from 'react'
import { BufferGeometry, Vector3 } from 'three'

export const Spokes: React.FC<{ vertices: Vector3[] }> = ({ vertices, ...rest }) => {
  const geo = useMemo(() => {
    return new BufferGeometry().setFromPoints(vertices)
  }, [vertices])

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial attach="material" color={'#ff44ee'} />
    </lineSegments>
  )
}
