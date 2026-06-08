import React from 'react';
import { motion } from 'framer-motion';
interface Props {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}
export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  center
}: Props) {
  return (
    <div
      className={`mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      
      <motion.div
        initial={{
          opacity: 0,
          y: 16
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#FF3E7A] ${center ? 'justify-center' : ''}`}>
        
        <span className="font-num">{index}</span>
        <span className="h-px w-8 bg-[#FF3E7A]/50" />
        <span className="text-text-secondary">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 24
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.05
        }}
        className="font-heading text-section font-semibold text-white">
        
        {title}
      </motion.h2>
      {subtitle &&
      <motion.p
        initial={{
          opacity: 0,
          y: 24
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.12
        }}
        className="mt-5 text-lg leading-relaxed text-text-secondary">
        
          {subtitle}
        </motion.p>
      }
    </div>);

}