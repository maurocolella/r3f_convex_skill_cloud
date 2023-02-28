import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import { Diamond } from './components/Diamond';
import { Globe } from './components/Globe';
import { distributeVertices } from './lib/distributeVertices';

const data = [
  { label: 'AWS', rating: 0.87 },
  { label: 'React', rating: 0.94 },
  { label: 'Front-end', rating: 1 },
  { label: 'Back-end', rating: 1 },
  { label: 'Full stack', rating: 1 },
];

export const App:React.FC<{}> = () => {
  const count = data.length;
  const vertices = useMemo(() => distributeVertices(count, false), [count]);

  return (<Canvas
    camera={{ position: [0, 0, 4] }}
    style={{ boxSizing: 'border-box', height: '100vh' }}
  >
    <fog attach="fog" color="#fff" near={1} far={8} />
    <Diamond vertices={vertices} />
    <Globe radius={1.1} />
    <OrbitControls
      autoRotate
      autoRotateSpeed={8}
    />
  </Canvas>)
}
