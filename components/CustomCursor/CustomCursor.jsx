"use client"
import { useState, useEffect } from 'react';
import './CustomCursor.css'

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <div className="ball">
        <div className="ball2"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
