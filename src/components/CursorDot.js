import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default CursorDot;
