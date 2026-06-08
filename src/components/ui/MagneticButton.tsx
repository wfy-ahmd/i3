import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = ''
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: x * 0.3,
      y: y * 0.3
    });
  };
  const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3E7A] focus-visible:ring-offset-2 focus-visible:ring-offset-background';
  const styles =
  variant === 'primary' ?
  'bg-[#FF3E7A] text-white hover:bg-[#ff5489] shadow-[0_8px_30px_rgba(255,62,122,0.35)]' :
  'glass text-white hover:border-white/20';
  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() =>
      setPos({
        x: 0,
        y: 0
      })
      }
      animate={{
        x: pos.x,
        y: pos.y
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      className={`${base} ${styles} ${className}`}>
      
      {children}
    </motion.a>);

}