// // Import React   OG
// import React from 'react';
// // Import Three.js Fiber and Drei utilities
// import { Canvas } from '@react-three/fiber';
// import { useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';

// // Import the robot model (ensure you have the model in the specified path)
// import robotModel from '../assets/robot_face.glb'; // Change this to your actual model path

// function RobotFace() {
//   // Load the robot model
//   const { scene } = useGLTF(robotModel);
  
//   // Ref to rotate the robot face
//   const robotRef = React.useRef();

//   // Rotate the robot face on every frame
//   useFrame(() => {
//     if (robotRef.current) {
//       robotRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <primitive object={scene} ref={robotRef} />
//   );
// }

// export default RobotFace;



// // Import React
// // import React, { useEffect } from 'react';
// // // Import Three.js Fiber and Drei utilities
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { useGLTF } from '@react-three/drei';
// // import * as THREE from 'three'; // Import Three.js for AnimationMixer

// // // Import the robot model (ensure you have the model in the specified path)
// // import robotModel from '../assets/robot_face.glb'; // Change this to your actual model path

// // function RobotFace() {
// //   // Load the robot model
// //   const { scene, animations } = useGLTF(robotModel);
  
// //   // Ref to rotate the robot face
// //   const robotRef = React.useRef();
// //   const mixer = new THREE.AnimationMixer(scene); // Set up the animation mixer

// //   // Rotate the robot face on every frame
// //   useFrame(() => {
// //     if (robotRef.current) {
// //       robotRef.current.rotation.y += 0.005; // Rotate the face
// //       mixer.update(0.01); // Update the mixer for animations
// //     }
// //   });

// //   // Handle animations
// //   useEffect(() => {
// //     if (animations.length) {
// //       const action = mixer.clipAction(animations[0]); // Use the first animation clip
// //       action.play();
// //     }
    
// //     return () => {
// //       mixer.stopAllAction(); // Stop all actions on unmount
// //     };
// //   }, [animations, mixer]);

// //   return (
// //     <primitive object={scene} ref={robotRef} />
// //   );
// // }

// // // Ensure you set up lighting in your Canvas to prevent the model from appearing black
// // export default function RobotCanvas() {
// //   return (
// //     <Canvas>
// //       {/* Add ambient light and a directional light */}
// //       <ambientLight intensity={0.5} />
// //       <directionalLight position={[0, 1, 1]} intensity={1} />
// //       <RobotFace />
// //     </Canvas>
// //   );
// // }

// ---------working
// import React, { useEffect, useRef } from 'react';
// // Import Three.js Fiber and Drei utilities
// import { useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three'; // Import Three.js for AnimationMixer

// // Import the robot model (ensure you have the model in the specified path)
// import robotModel from '../assets/robot_face.glb'; // Change this to your actual model path

// function RobotFace() {
//   const { scene, animations } = useGLTF(robotModel);
//   const robotRef = useRef();
//   const mixer = useRef();

//   // Rotate the robot face and update animations on every frame
//   useFrame(() => {
//     if (robotRef.current) {
//               // You can remove or adjust the automatic rotation if you prefer user-controlled rotation
//       robotRef.current.rotation.y += 0.005; // Rotate the face
//       if (mixer.current) {
//         mixer.current.update(0.01); // Update the mixer for animations
//       }
//     }
//   });

//   // Set up the animation mixer
//   useEffect(() => {
//     if (animations.length) {
//       mixer.current = new THREE.AnimationMixer(scene);
//       const action = mixer.current.clipAction(animations[0]);
//       action.play();
//     }

//     return () => {
//       if (mixer.current) {
//         mixer.current.stopAllAction();
//       }
//     };
//   }, [animations, scene]);

//   return <primitive object={scene} ref={robotRef} />;
// }

// // Export the RobotFace component
// export default RobotFace;



// Import React
import React, { useEffect, useRef } from 'react';
// Import Three.js Fiber and Drei utilities
import { useFrame, Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import Three.js for AnimationMixer

// Import the robot model (ensure you have the model in the specified path)
import robotModel from '../assets/robot_face.glb'; // Change this to your actual model path

function RobotFace() {
  const { scene, animations } = useGLTF(robotModel);
  const robotRef = useRef();
  const mixer = useRef();

  // Rotate the robot face and update animations on every frame
  useFrame(() => {
    if (robotRef.current) {
      // You can remove or adjust the automatic rotation if you prefer user-controlled rotation
      robotRef.current.rotation.y += 0.01; 
      // robotRef.current.rotation.x += 0.01;// Rotate the face
      if (mixer.current) {
        mixer.current.update(0.01); // Update the mixer for animations
      }
    }
  });

  // Set up the animation mixer
  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [animations, scene]);

  return <primitive object={scene} ref={robotRef} />;
}

// Export the RobotFace component
export default RobotFace;

// Create a wrapper component for Canvas
export function RobotFaceCanvas() {
  return (
    <Canvas style={{ width: '300px', height: '300px' }}> {/* Set appropriate size */}
      <RobotFace />
    </Canvas>
  );
}
