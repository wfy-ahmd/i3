import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXPERIENCE } from '../../data/portfolio';
const ease = [0.22, 1, 0.36, 1] as const;
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });
  const lineH = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25
  });
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="09"
        eyebrow="Hands-On Experience"
        title="Experience & Activities"
        center />


      <div ref={ref} className="relative mx-auto max-w-4xl">
        {/* base line */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        {/* glow line */}
        <motion.div
          style={{
            scaleY: lineH
          }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-[#FF3E7A] to-[#FFB3C8] shadow-[0_0_12px_rgba(255,62,122,0.6)] md:left-1/2 md:-translate-x-1/2" />


        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.org}
                initial={{
                  opacity: 0,
                  y: 30
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
                  ease
                }}
                className={`relative flex md:items-center ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* node */}
                <span className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-background ring-2 ring-[#FF3E7A] md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF3E7A]" />
                </span>

                <div className="hidden md:block md:w-1/2" />
                <div
                  className={`w-full pl-12 md:w-1/2 md:pl-0 ${left ? 'md:pr-10' : 'md:pl-10'}`}>

                  <motion.div
                    whileHover={{
                      y: -5
                    }}
                    data-cursor-hover
                    className="rounded-2xl glass p-6 transition-colors duration-300 hover:border-[#FF3E7A]/30">

                    <div className="mb-3 flex items-center gap-2">
                      <BriefcaseIcon size={15} className="text-[#FF3E7A]" />
                      <span className="font-num text-sm font-semibold text-[#FF3E7A]">
                        {e.period}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {e.title}
                    </h3>
                    <p className="text-sm text-soft-pink">{e.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {e.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}