// import { Canvas } from '@react-three/fiber';
// import RobotFace from './RobotFace'; // Adjust the path accordingly
// import { OrbitControls } from '@react-three/drei'; // Import OrbitControls


// const ThreeCanvas = () => {
//   return (

// <Canvas
//   style={{ width: '600px', height: '600px' }} // Change to your desired size
//   camera={{ position: [0, 0, 5], fov: 75 }} // Set the camera position and field of view
// >
//   <ambientLight intensity={2.3} /> {/* Overall light for basic illumination */}
//   <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Sunlight-like effect */}
  
//   <spotLight 
//     position={[0, 10, 0]} 
//     angle={0.15} 
//     penumbra={1} 
//     intensity={2} 
//     color={0xffffff} // White light for brightness
//   />

//   <hemisphereLight 
//     skyColor={0xffffff} // White light from the sky
//     groundColor={0x444444} // Dark gray from the ground
//     intensity={1} // Intensity of the hemisphere light
//   />

//   <RobotFace /> {/* Your 3D model */}
  
//   <OrbitControls enableZoom={false} /> {/* Add controls for user interaction */}
// </Canvas>

//   );
// };

// export default ThreeCanvas;




import { Canvas } from '@react-three/fiber';
import RobotFace from './RobotFace'; // Adjust the path accordingly
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls

const ThreeCanvas = () => {
  return (
    <Canvas
      style={{ 
        width: '300px', 
        height: '300px',
        margin:'0' ,
        position: 'fixed', // Set to absolute to position it freely
        left: '-5%', // Align to the left side of the container
        top: '20%', // Position at the center vertically
        transform: 'translateY(-40%)', // Adjust to keep it centered
      }} // Change to your desired size
      camera={{ position: [0, 3, 3], fov: 75, near: 0.1, far: 100 }} // Set camera position and clipping planes
    >
      <ambientLight intensity={0.5} /> {/* Reduced overall light intensity */}
      <directionalLight position={[5, 5, 5]} intensity={5} /> {/* Sunlight-like effect */}
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
        intensity={2} // Reduced intensity of the hemisphere light
      />

      <RobotFace /> {/* Your 3D model */}
      
      <OrbitControls enableZoom={false} /> {/* Add controls for user interaction */}
    </Canvas>
  );
};

export default ThreeCanvas;



// import { Canvas, useThree } from '@react-three/fiber';
// import RobotFace from './RobotFace'; // Your GLB model
// import { OrbitControls } from '@react-three/drei';
// import { useEffect } from 'react';
// import { Box3, Vector3 } from 'three';

// // Helper function to center the robot
// const CenteredRobotFace = () => {
//   const { scene, camera } = useThree();

//   useEffect(() => {
//     // Calculate the bounding box of the robot
//     const box = new Box3().setFromObject(scene);
//     const center = new Vector3();
//     box.getCenter(center);

//     // Position the camera based on the center of the robot model
//     camera.position.set(center.x, center.y, center.z + 5); 
//     camera.lookAt(center);
//   }, [scene, camera]);

//   return null;
// };

// const ThreeCanvas = () => {
//   return (
//     <Canvas
//       style={{ width: '600px', height: '600px' }} // Set the size of the Canvas
//       camera={{
//         position: [0, 0, 5], // Initial camera position
//         fov: 45, // Narrow field of view to zoom in and remove extra space
//         near: 0.1, // Near clipping plane
//         far: 1000, // Far clipping plane
//       }}
//     >
//       {/* Lighting setup */}
//       <ambientLight intensity={2.3} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={2} color={0xffffff} />
//       <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={1} />

//       {/* Robot model */}
//       <RobotFace />

//       {/* Automatically center the camera based on the bounding box */}
//       <CenteredRobotFace />

//       {/* Orbit controls for user interaction */}
//       <OrbitControls enableZoom={true} /> {/* Set to true to allow zoom control */}
//     </Canvas>
//   );
// };

// export default ThreeCanvas;

