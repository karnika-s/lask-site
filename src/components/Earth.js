// Import React
import React from 'react';
// Import Three.js Fiber and Drei utilities
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
// Import texture loaders from Three.js
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
// Import Earth texture images (download them and place them in the 'assets' folder)
import earthTexture from '../assets/earth_texture.jpg';
// import earthNormalMap from '../assets/earth_normal_map.jpg';

function Earth() {
  // Load textures
//   const [colorMap, normalMap] = useLoader(TextureLoader, [earthTexture, earthNormalMap]);
  const [colorMap] = useLoader(TextureLoader, [earthTexture]);

  // Ref to rotate the Earth
  const earthRef = React.useRef();

  // Rotate Earth on every frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={earthRef}>
      {/* Sphere geometry (for Earth) */}
      <Sphere args={[1, 32, 32]}>
        {/* Apply textures */}
        <meshStandardMaterial map={colorMap} />
        {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
      </Sphere>
      {/* Add some light */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 2, 5]} intensity={1} />
    </mesh>
  );
}

export default Earth;
