import './index.css';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'
import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

const data = [
  { label: 'AWS', rating: 0.87 },
  { label: 'React', rating: 0.94 },
  { label: 'Front-end', rating: 1 },
  { label: 'Back-end', rating: 1 },
  { label: 'Full stack', rating: 1 },
];

// Distribute vertices with adequate uniformity within the surface of a spheroid
// Implements the Fibonnaci sphere algorithm, see:
// https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere/26127012#26127012
const distributeVertices = (samples: number, randomize: any) => {
  let rnd = 1.0;
  if (randomize) {
    rnd = Math.random() * samples;
  }

  const points = [];
  const offset = 2.0 / samples;
  const increment = Math.PI * (3.0 - Math.sqrt(5.0));

  let i = 0;
  let r = 0;
  let x = 0;
  let y = 0;
  let z = 0;
  let phi = 0;

  for (; i < samples; i += 1) {
    y = ((i * offset) - 1) + (offset / 2);
    r = Math.sqrt(1 - (y ** 2));

    phi = ((i + rnd) % samples) * increment;

    x = Math.cos(phi) * r;
    z = Math.sin(phi) * r;

    points.push(new Vector3(...[x, y, z]));
  }

  return points;
}

function Diamond({ vertices, ...rest } : { vertices: Vector3[] }) {
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

const Globe = ({ radius = 1 }) => {
  return (
    <mesh scale={ radius }>
      <sphereBufferGeometry />
      <meshStandardMaterial wireframe wireframeLinewidth={0.5} transparent opacity={0.1} />
    </mesh>
  );
};


const App = () => {
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

createRoot(document.getElementById('root') as Element).render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
