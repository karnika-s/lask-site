import { Canvas } from '@react-three/fiber';
import RobotFace from './RobotFace'; // Adjust the path accordingly
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls


const ThreeCanvas = () => {
  return (

//     <Canvas
//   style={{ width: '600px', height: '600px' }} // Change to your desired size
//   camera={{ position: [0, 0, 5], fov: 75 }}
// >
//   <ambientLight intensity={1} />
//   <directionalLight position={[0, 1, 1]} intensity={1} />    
//   {/* position={[0, 1, 1]}: Sets the position of the light source in 3D space */}
//   <spotLight 
//   position={[0, 10, 0]} 
//   angle={0.15} 
//   penumbra={1} 
//   intensity={2} 
// />
// <hemisphereLight 
//   skyColor={0xffffff} // light blue 
//   groundColor={0x444444} // dark gray 
//   intensity={1} 
// />

//   <RobotFace />
//   <OrbitControls 
//   enableZoom={false} /> {/* Add OrbitControls for user interaction */}
// </Canvas>

<Canvas
  style={{ width: '600px', height: '600px' }} // Change to your desired size
  camera={{ position: [0, 0, 5], fov: 75 }} // Set the camera position and field of view
>
  <ambientLight intensity={1} /> {/* Overall light for basic illumination */}
  <directionalLight position={[0, 1, 1]} intensity={1} /> {/* Sunlight-like effect */}
  
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
