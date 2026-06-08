import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboardIcon,
  BarChart3Icon,
  CheckSquareIcon,
  GlobeIcon,
  MicroscopeIcon,
  BotIcon,
  GithubIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  CheckIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS, type Project } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  LayoutDashboard: LayoutDashboardIcon,
  BarChart3: BarChart3Icon,
  CheckSquare: CheckSquareIcon,
  Globe: GlobeIcon,
  Microscope: MicroscopeIcon,
  Bot: BotIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
function TiltCard({
  children,
  className = ''



}: { children: React.ReactNode; className?: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({
    rx: 0,
    ry: 0
  });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setT({
      rx: py * -8,
      ry: px * 8
    });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() =>
        setT({
          rx: 0,
          ry: 0
        })
      }
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      animate={{
        rotateX: t.rx,
        rotateY: t.ry
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      data-cursor-hover
      className={className}>

      {children}
    </motion.div>);

}
function Badges({ tech }: { tech: string[]; }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) =>
        <span
          key={t}
          className="rounded-lg border border-glass bg-white/5 px-2.5 py-1 text-xs text-soft-pink">

          {t}
        </span>
      )}
    </div>);

}
function Actions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="#"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#FF3E7A] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#ff5489]">

        <ExternalLinkIcon size={13} /> Live Demo
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 rounded-full border border-glass bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white/20">

        <GithubIcon size={13} /> GitHub
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-[#FF3E7A]">

        Case Study <ArrowRightIcon size={13} />
      </a>
    </div>);

}
function Impacts({ impacts }: { impacts: string[]; }) {
  return (
    <ul className="space-y-1.5">
      {impacts.map((im) =>
        <li
          key={im}
          className="flex items-center gap-2 text-sm text-text-secondary">

          <CheckIcon size={14} className="text-[#FF3E7A]" /> {im}
        </li>
      )}
    </ul>);

}
export function Projects() {
  const featured = PROJECTS.find((p) => p.featured) as Project;
  const rest = PROJECTS.filter((p) => !p.featured);
  const FIcon = ICONS[featured.icon];
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="04"
        eyebrow="What I've Built"
        title="Featured Projects" />


      {/* featured horizontal */}
      <TiltCard className="mb-6">
        <motion.div
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
            duration: 0.6,
            ease
          }}
          className="group grid overflow-hidden rounded-3xl glass-strong md:grid-cols-2">

          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FF3E7A]/20 to-[#FFB3C8]/5">
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <FIcon
                size={88}
                className="text-[#FF3E7A] transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.2} />
            )}

            <span className="absolute left-5 top-5 rounded-full bg-[#FF3E7A] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              Featured
            </span>
          </div>
          <div className="p-8 lg:p-10">
            <h3 className="font-heading text-2xl font-semibold text-white">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {featured.desc}
            </p>
            <div className="mt-5">
              <Impacts impacts={featured.impacts} />
            </div>
            <div className="mt-5">
              <Badges tech={featured.tech} />
            </div>
            <div className="mt-6">
              <Actions />
            </div>
          </div>
        </motion.div>
      </TiltCard>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <TiltCard key={p.title}>
              <motion.div
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
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-colors duration-300 hover:border-[#FF3E7A]/30">

                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#FF3E7A]/15 to-transparent">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Icon
                      size={48}
                      className="text-[#FF3E7A] transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.3} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {p.desc}
                  </p>
                  <div className="mt-4">
                    <Impacts impacts={p.impacts} />
                  </div>
                  <div className="mt-4">
                    <Badges tech={p.tech} />
                  </div>
                  <div className="mt-auto pt-5">
                    <Actions />
                  </div>
                </div>
              </motion.div>
            </TiltCard>);

        })}
      </div>
    </section>);

}