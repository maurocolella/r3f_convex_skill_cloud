import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Diamond } from './components/Diamond';
import { Globe } from './components/Globe';
import { Label } from './components/Label';
import { Spokes } from './components/Spokes';
import { distributeVertices } from './lib/distributeVertices';
import { useWeights } from './lib/useWeights';

export type Skill = {
  label: string
  rating: number
}

export const App:React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const outerRadius = 2;
  const fibVertices = distributeVertices(skills.length, false);
  const { weightedVertices, segmentVertices } = useWeights(skills, fibVertices, outerRadius);

  return (<Canvas
    camera={{ position: [0, 0, 4.5] }}
    style={{ boxSizing: 'border-box', height: '100vh' }}
  >
    <fog attach="fog" color="#fff" near={2} far={7.5} />
    <Diamond vertices={fibVertices} />
    <Globe />
    <Globe
      radius={outerRadius * 0.9}
      opacity={0.045}
      depthTest={false}
    />
    <Spokes vertices={segmentVertices} />
    {skills.map((skill, index) => (
      <Label key={index} text={skill.label} position={weightedVertices[index]} />
    ))}
    <OrbitControls
      autoRotate
      autoRotateSpeed={8}
    />
  </Canvas>)
}
