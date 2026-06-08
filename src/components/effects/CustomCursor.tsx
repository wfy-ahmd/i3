import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, {
    stiffness: 500,
    damping: 40,
    mass: 0.4
  });
  const springY = useSpring(y, {
    stiffness: 500,
    damping: 40,
    mass: 0.4
  });
  useEffect(() => {
    if (
    window.matchMedia('(min-width: 1024px)').matches &&
    window.matchMedia('(pointer: fine)').matches)
    {
      setEnabled(true);
      document.body.classList.add('custom-cursor-active');
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor-hover]'));
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);
  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[#FF3E7A] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: hovering ? 48 : 10,
          height: hovering ? 48 : 10
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1]
        }} />
      
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-[#FF3E7A]/40"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36
        }} />
      
    </>);

}