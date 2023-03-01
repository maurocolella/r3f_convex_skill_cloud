import { useMemo } from 'react';
import { Texture, Vector3 } from 'three';

interface labelProps {
  text: string
  textureSize ?: number
  position?: Vector3
}

export const Label:React.FC<labelProps> = ({
  text,
  textureSize = 512,
  position = new Vector3(0,0,0),
}) => {
  const texture = useMemo(() => {
    let canvas = document.createElement('canvas');
    canvas.width = textureSize;
    canvas.height = textureSize;

    let context = canvas.getContext('2d');
    context!.font = '52px Open Sans, sans-serif';
    context!.textBaseline = 'middle';
    context!.textAlign = 'center';
    context!.fillStyle = '#222222';
    context!.fillText(text.toUpperCase(), textureSize / 2, textureSize / 2);

    const texture = new Texture(canvas);
    texture.needsUpdate = true;

    return texture;
  }, [text, textureSize]);

  return <sprite position={position}>
    <spriteMaterial map={texture} />
  </sprite>
}
