import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export function Background() {
  const spotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (spotRef.current) {
          spotRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,62,122,0.07), transparent 60%)`;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
          'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)'
        }} />
      

      {/* gradient blobs */}
      <motion.div
        className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(255,62,122,0.22)'
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      <motion.div
        className="absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full blur-[130px]"
        style={{
          background: 'rgba(255,179,200,0.12)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      <motion.div
        className="absolute bottom-0 left-1/2 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(255,62,122,0.12)'
        }}
        animate={{
          x: [-60, 60, -60]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      

      {/* mouse spotlight */}
      <div ref={spotRef} className="absolute inset-0" />

      {/* noise */}
      <div className="noise-overlay absolute inset-0" />
    </div>);

}