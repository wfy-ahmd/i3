import React from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  ClipboardListIcon,
  Code2Icon,
  TrendingUpIcon,
  TargetIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FEATURE_CARDS } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  Briefcase: BriefcaseIcon,
  ClipboardList: ClipboardListIcon,
  Code2: Code2Icon,
  TrendingUp: TrendingUpIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader index="01" eyebrow="Who I Am" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* left image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
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
            duration: 0.7,
            ease
          }}
          className="relative h-fit overflow-hidden rounded-3xl glass-strong p-3">

          <img
            src="/images.PNG"
            alt="Ilma Niyas working"
            className="h-[420px] w-full rounded-2xl object-cover" />

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-strong p-4">
            <p className="font-heading text-sm font-semibold text-white">
              BSc in Information Technology
            </p>
            <p className="text-xs text-text-secondary">
              Rajarata University of Sri Lanka
            </p>
          </div>
        </motion.div>

        {/* right content */}
        <div>
          <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
            {[
              'I am Ilma Niyas, an Information Technology undergraduate from Rajarata University of Sri Lanka, with a deep passion for the intersection of business strategy and technology.',
              'My academic journey has equipped me with a versatile foundation spanning business analysis methodologies, agile project management frameworks, software development practices, and data-driven decision-making. I believe that the most impactful solutions emerge when analytical rigor meets creative problem-solving.',
              'I thrive in collaborative environments where I can contribute to bridging the gap between stakeholder requirements and technical implementation — translating complex business needs into clear, actionable solutions.'].
              map((p, i) =>
                <motion.p
                  key={i}
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
                    margin: '-60px'
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                    delay: i * 0.1
                  }}>

                  {p}
                </motion.p>
              )}
          </div>

          <motion.div
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
              margin: '-60px'
            }}
            transition={{
              duration: 0.5,
              ease
            }}
            className="mt-7 rounded-2xl glass p-5">

            <div className="mb-2 flex items-center gap-2 text-[#FF3E7A]">
              <TargetIcon size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Career Objective
              </span>
            </div>
            <p className="text-base leading-relaxed text-text-secondary">
              Seeking internship and undergraduate opportunities in Business
              Analysis, Project Management, and Information Technology to apply
              academic knowledge, develop industry experience, and contribute to
              organizational success through technology-driven solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* feature cards */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_CARDS.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <motion.div
              key={c.title}
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
                margin: '-60px'
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
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 hover:border-[#FF3E7A]/30">

              <span className="absolute left-0 top-0 h-1 w-0 bg-[#FF3E7A] transition-all duration-500 ease-smooth group-hover:w-full" />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A]">
                <Icon size={20} />
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