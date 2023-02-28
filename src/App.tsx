import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { Diamond } from './components/Diamond';
import { Globe } from './components/Globe';
import { Spokes } from './components/Spokes';
import { distributeVertices } from './lib/distributeVertices';

export type Skill = {
  label: string
  rating: number
}

export const App:React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const outerRadius = 1.618;
  const fibVertices = distributeVertices(skills.length, false);
  const weightedVertices = useMemo(() => {
    const result = [];
    const origin = new Vector3(0, 0, 0);

    for(let i = 0; i < skills.length; i++) {
      const scalar = skills[i].rating * outerRadius;
      const vert = fibVertices[i];

      // Prepare weighted line segments
      result.push(origin);
      result.push(
        new Vector3(vert.x * scalar, vert.y * scalar, vert.z * scalar)
      );
    }

    return result;
  }, [fibVertices, skills])

  return (<Canvas
    camera={{ position: [0, 0, 4.5] }}
    style={{ boxSizing: 'border-box', height: '100vh' }}
  >
    <fog attach="fog" color="#fff" near={2} far={7.5} />
    <Diamond vertices={fibVertices} />
    <Globe />
    <Globe radius={outerRadius} />
    <Spokes vertices={weightedVertices} />
    <OrbitControls
      autoRotate
      autoRotateSpeed={8}
    />
  </Canvas>)
}
