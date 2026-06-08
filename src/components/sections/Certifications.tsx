import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheckIcon,
  ZapIcon,
  RefreshCwIcon,
  BarChart3Icon,
  FolderKanbanIcon,
  CpuIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { CountUp } from '../ui/CountUp';
import { CERTIFICATIONS } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  ClipboardCheck: ClipboardCheckIcon,
  Zap: ZapIcon,
  RefreshCw: RefreshCwIcon,
  BarChart3: BarChart3Icon,
  FolderKanban: FolderKanbanIcon,
  Cpu: CpuIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          index="05"
          eyebrow="Credentials"
          title="Certifications & Qualifications" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            ease
          }}
          className="mb-14 rounded-2xl glass px-6 py-4 text-center">

          <div className="font-num text-3xl font-extrabold text-[#FF3E7A]">
            <CountUp to={6} suffix="+" />
          </div>
          <div className="text-xs text-text-secondary">
            Certifications Earned
          </div>
        </motion.div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <motion.div
              key={c.title}
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
                margin: '-50px'
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
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:border-[#FF3E7A]/40 hover:shadow-[0_0_40px_rgba(255,62,122,0.18)]">

              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-soft-pink">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {c.desc}
              </p>
            </motion.div>);

        })}
      </div>
    </section>);

}