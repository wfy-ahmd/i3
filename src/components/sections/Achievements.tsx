import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2Icon,
  TrophyIcon,
  LightbulbIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACHIEVEMENTS } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  Code2: Code2Icon,
  Trophy: TrophyIcon,
  Lightbulb: LightbulbIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="06"
        eyebrow="Milestones"
        title="Achievements & Recognition" />


      <div className="grid auto-rows-[200px] gap-5 md:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[a.icon];
          return (
            <motion.div
              key={a.num}
              initial={{
                opacity: 0,
                y: 26
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                ease,
                delay: i * 0.08
              }}
              whileHover={{
                y: -6
              }}
              data-cursor-hover
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl glass p-6 transition-colors duration-300 hover:border-[#FF3E7A]/30 ${a.span === 'lg' ? 'md:col-span-2' : ''}`}>

              <div className="absolute -right-6 -top-6 font-num text-7xl font-extrabold text-white/[0.04]">
                {a.num}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A] transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">
                  {a.desc}
                </p>
              </div>
            </motion.div>);

        })}
      </div>
    </section>);

}