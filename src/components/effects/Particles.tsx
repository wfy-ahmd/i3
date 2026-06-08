import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
export function Particles() {
  const dots = useMemo(
    () =>
    Array.from({
      length: 18
    }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 10 + 12,
      delay: Math.random() * 6
    })),
    []
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      
      {dots.map((d) =>
      <motion.span
        key={d.id}
        className="absolute rounded-full bg-[#FF3E7A]"
        style={{
          left: `${d.left}%`,
          top: `${d.top}%`,
          width: d.size,
          height: d.size,
          opacity: 0.4
        }}
        animate={{
          y: [0, -40, 0],
          opacity: [0.1, 0.5, 0.1]
        }}
        transition={{
          duration: d.dur,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: d.delay
        }} />

      )}
    </div>);

}