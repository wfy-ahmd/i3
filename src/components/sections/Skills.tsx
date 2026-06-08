import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BriefcaseIcon,
  Code2Icon,
  BrainIcon,
  MessageSquareIcon,
  AwardIcon,
  SearchIcon,
  UsersIcon,
  ClockIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { CountUp } from '../ui/CountUp';
import { BUSINESS_SKILLS, TECH_SKILLS, SOFT_SKILLS } from '../../data/portfolio';
const SOFT_ICONS: Record<string, React.ElementType> = {
  MessageSquare: MessageSquareIcon,
  Award: AwardIcon,
  Search: SearchIcon,
  Users: UsersIcon,
  Brain: BrainIcon,
  Clock: ClockIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
function RadialSkill({
  label,
  value,
  delay




}: { label: string; value: number; delay: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - value / 100 * c;
  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      data-cursor-hover>

      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6" />

          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#FF3E7A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{
              strokeDashoffset: c
            }}
            animate={
              inView ?
                {
                  strokeDashoffset: offset
                } :
                {}
            }
            transition={{
              duration: 1.4,
              ease,
              delay
            }} />

        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-num text-xl font-extrabold text-white">
          {inView && <CountUp to={value} suffix="%" duration={1.4} />}
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-text-secondary">{label}</p>
    </div>);

}
export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="03"
        eyebrow="What I Bring"
        title="Skills & Expertise" />


      <div className="grid gap-6 lg:grid-cols-2">
        {/* Business skills */}
        <motion.div
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
            margin: '-60px'
          }}
          transition={{
            duration: 0.6,
            ease
          }}
          className="rounded-3xl glass p-7">

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
              <BriefcaseIcon size={18} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white">
              Business Skills
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {BUSINESS_SKILLS.map((s, i) =>
              <RadialSkill
                key={s.label}
                label={s.label}
                value={s.value}
                delay={i * 0.1} />

            )}
          </div>
        </motion.div>

        {/* Technical skills */}
        <motion.div
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
            margin: '-60px'
          }}
          transition={{
            duration: 0.6,
            ease,
            delay: 0.1
          }}
          className="rounded-3xl glass p-7">

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
              <Code2Icon size={18} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white">
              Technical Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {TECH_SKILLS.map((t, i) =>
              <motion.span
                key={t}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  ease,
                  delay: i * 0.05
                }}
                whileHover={{
                  scale: 1.08
                }}
                data-cursor-hover
                className="cursor-default rounded-full border border-glass bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#FF3E7A]/50 hover:text-[#FF3E7A] hover:shadow-[0_0_20px_rgba(255,62,122,0.35)]">

                {t}
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Soft skills */}
      <div className="mt-6 rounded-3xl glass p-7">
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
            <BrainIcon size={18} />
          </div>
          <h3 className="font-heading text-xl font-semibold text-white">
            Soft Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SOFT_SKILLS.map((s, i) => {
            const Icon = SOFT_ICONS[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{
                  opacity: 0,
                  y: 18
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-40px'
                }}
                transition={{
                  duration: 0.4,
                  ease,
                  delay: i * 0.06
                }}
                whileHover={{
                  y: -5
                }}
                data-cursor-hover
                className="flex flex-col items-center gap-3 rounded-2xl border border-glass bg-white/5 p-5 text-center transition-colors duration-300 hover:border-[#FF3E7A]/30">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-white">
                  {s.title}
                </span>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}