import { useMemo } from 'react';
import { Vector3 } from 'three';
import { Skill } from '../App';

export const useWeights = (skills: Skill[], vertices: Vector3[], outerRadius: number) => {
  const weightedVertices = useMemo(() => {
    const result = [];

    for (let i = 0; i < skills.length; i++) {
      const scalar = skills[i].rating * outerRadius * 1.2;
      const vert = vertices[i];

      // Prepare weighted line segments
      result.push(
        new Vector3(vert.x * scalar, vert.y * scalar, vert.z * scalar)
      );
    }

    return result;
  }, [skills, vertices, outerRadius]);

  const segmentVertices = useMemo(() => {
    const result = [];
    const origin = new Vector3(0, 0, 0);
    const scalar = 0.95;

    for (let i = 0; i < weightedVertices.length; i++) {
      const vert = weightedVertices[i];

      // Prepare weighted line segments
      result.push(
        origin,
        new Vector3(vert.x * scalar, vert.y * scalar, vert.z * scalar),
      );
    }

    return result;
  }, [weightedVertices]);

  return { weightedVertices, segmentVertices };
}
