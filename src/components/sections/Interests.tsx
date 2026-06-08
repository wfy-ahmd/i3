import React from 'react';
import { motion } from 'framer-motion';
import {
  MicroscopeIcon,
  ClipboardListIcon,
  BookOpenIcon,
  LightbulbIcon,
  PuzzleIcon,
  RadioIcon,
  BarChart3Icon,
  SproutIcon } from
'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { INTERESTS } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  Microscope: MicroscopeIcon,
  ClipboardList: ClipboardListIcon,
  BookOpen: BookOpenIcon,
  Lightbulb: LightbulbIcon,
  Puzzle: PuzzleIcon,
  Radio: RadioIcon,
  BarChart3: BarChart3Icon,
  Sprout: SproutIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
export function Interests() {
  return (
    <section
      id="interests"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      
      <SectionHeader
        index="08"
        eyebrow="Outside the Desk"
        title="Interests & Hobbies"
        center />
      

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {INTERESTS.map((it, i) => {
          const Icon = ICONS[it.icon];
          return (
            <motion.div
              key={it.title}
              initial={{
                opacity: 0,
                scale: 0.85
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true,
                margin: '-40px'
              }}
              transition={{
                duration: 0.5,
                ease,
                delay: i * 0.07
              }}
              whileHover={{
                y: -6
              }}
              data-cursor-hover
              className="group flex flex-col items-center gap-4 rounded-3xl glass p-7 text-center transition-colors duration-300 hover:border-[#FF3E7A]/30">
              
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3E7A]/10 text-[#FF3E7A]"
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 3 + i % 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2
                }}>
                
                <Icon size={26} />
              </motion.div>
              <span className="text-sm font-medium text-white">{it.title}</span>
            </motion.div>);

        })}
      </div>
    </section>);

}