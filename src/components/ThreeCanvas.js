import { Canvas } from '@react-three/fiber';
import RobotFace from './RobotFace'; // Adjust the path accordingly
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls


const ThreeCanvas = () => {
  return (

<Canvas
  style={{ width: '600px', height: '600px' }} // Change to your desired size
  camera={{ position: [0, 0, 5], fov: 75 }} // Set the camera position and field of view
>
  <ambientLight intensity={2.3} /> {/* Overall light for basic illumination */}
  <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Sunlight-like effect */}
  
  <spotLight 
    position={[0, 10, 0]} 
    angle={0.15} 
    penumbra={1} 
    intensity={2} 
    color={0xffffff} // White light for brightness
  />

  <hemisphereLight 
    skyColor={0xffffff} // White light from the sky
    groundColor={0x444444} // Dark gray from the ground
    intensity={1} // Intensity of the hemisphere light
  />

  <RobotFace /> {/* Your 3D model */}
  
  <OrbitControls enableZoom={false} /> {/* Add controls for user interaction */}
</Canvas>

  );
};

export default ThreeCanvas;
