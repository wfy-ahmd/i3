import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-[#FF3E7A] to-[#FFB3C8]"
      style={{
        scaleX
      }} />);


}