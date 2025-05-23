import React, { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const layers = [
      { count: 80, className: 'layer-1' },
      { count: 40, className: 'layer-2' },
      { count: 10, className: 'layer-3' },
    ];

    layers.forEach(({ count, className }) => {
      const layer = document.createElement('div');
      layer.className = `star-layer ${className}`;

      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        layer.appendChild(star);
      }

      containerRef.current.appendChild(layer);
    });
  }, []);

  return <div className="starfield" ref={containerRef}></div>;
};

export default Starfield;