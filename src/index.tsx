import './index.css';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client'
import React, { useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { OrbitControls } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

// Distribute vertices with adequate uniformity within the surface of a spheroid
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

function Diamond(props: any) {
  const vertices = distributeVertices(20, false);

  const geo = useMemo(() => {
    return new ConvexGeometry(vertices)
  }, [vertices])

  const mesh = useRef<Mesh>()

  return (
    <mesh castShadow receiveShadow ref={mesh} geometry={geo} {...props} dispose={null}>
      <meshStandardMaterial attach="material" wireframe wireframeLinewidth={0.8} />
    </mesh>
  )
}

createRoot(document.getElementById('root') as Element).render(
  <Canvas
    camera={{ position: [0, 0, 4] }}
    style={{ boxSizing: 'border-box', border: '1px solid grey', height: '100vh' }}
  >
    <fog attach="fog" color="#fff" near={0} far={5} />
    <Diamond position={[0, 0, 0]} />
    <OrbitControls
      autoRotate
      autoRotateSpeed={16}
    />
  </Canvas>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
