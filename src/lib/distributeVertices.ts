// Distribute vertices with adequate uniformity within the surface of a spheroid
// Implements the Fibonnaci sphere algorithm, see:

import { Vector3 } from 'three';

// https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere/26127012#26127012
export const distributeVertices = (samples: number, randomize: any) => {
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
