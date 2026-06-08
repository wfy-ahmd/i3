import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { EDUCATION } from '../../data/portfolio';
const ease = [0.22, 1, 0.36, 1] as const;
export function Education() {
  return (
    <section
      id="education"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="02"
        eyebrow="Academic Foundation"
        title="Education & Learning" />


      <div className="relative pl-8 md:pl-12">
        {/* connector line */}
        <motion.div
          initial={{
            scaleY: 0
          }}
          whileInView={{
            scaleY: 1
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 1,
            ease
          }}
          className="absolute left-[10px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-[#FF3E7A] via-[#FF3E7A]/40 to-transparent md:left-[18px]" />


        <div className="space-y-8">
          {EDUCATION.map((e, i) =>
            <motion.div
              key={e.title}
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-80px'
              }}
              transition={{
                duration: 0.6,
                ease,
                delay: i * 0.1
              }}
              className="relative">

              {/* node */}
              <span className="absolute -left-8 top-7 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-[#FF3E7A] md:-left-12">
                <span className="h-2 w-2 rounded-full bg-[#FF3E7A]" />
              </span>

              <motion.div
                whileHover={{
                  y: -5
                }}
                data-cursor-hover
                className="rounded-2xl border border-glass bg-glass p-6 transition-colors duration-300 hover:border-[#FF3E7A]/30 md:p-8"
                style={{
                  backdropFilter: 'blur(16px)'
                }}>

                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-num text-sm font-semibold text-[#FF3E7A]">
                    {e.period}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-secondary">
                    {e.tag}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
                    <GraduationCapIcon size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {e.title}
                    </h3>
                    <p className="text-sm text-soft-pink">{e.org}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {e.desc}
                </p>

                {e.coursework.length > 0 &&
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {e.coursework.map((c) =>
                        <span
                          key={c}
                          className="rounded-lg border border-glass bg-white/5 px-3 py-1.5 text-xs text-white">

                          {c}
                        </span>
                      )}
                    </div>
                  </div>
                }
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}