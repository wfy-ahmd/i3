import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUpIcon,
  AlertTriangleIcon,
  SparklesIcon,
  ShieldAlertIcon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SWOT } from '../../data/portfolio';
const ease = [0.22, 1, 0.36, 1] as const;
const QUADRANTS = [
  {
    key: 'strengths',
    letter: 'S',
    title: 'Strengths',
    items: SWOT.strengths,
    icon: TrendingUpIcon,
    tint: 'rgba(255,62,122,0.12)',
    accent: '#FF3E7A'
  },
  {
    key: 'weaknesses',
    letter: 'W',
    title: 'Weaknesses',
    items: SWOT.weaknesses,
    icon: AlertTriangleIcon,
    tint: 'rgba(255,179,200,0.12)',
    accent: '#FFB3C8'
  },
  {
    key: 'opportunities',
    letter: 'O',
    title: 'Opportunities',
    items: SWOT.opportunities,
    icon: SparklesIcon,
    tint: 'rgba(201,196,200,0.1)',
    accent: '#C9C4C8'
  },
  {
    key: 'threats',
    letter: 'T',
    title: 'Threats',
    items: SWOT.threats,
    icon: ShieldAlertIcon,
    tint: 'rgba(94,90,98,0.18)',
    accent: '#9b96a0'
  }];

export function Swot() {
  return (
    <section
      id="swot"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="07"
        eyebrow="Self Assessment"
        title="SWOT Analysis"
        subtitle="An honest assessment of my professional profile to demonstrate self-awareness and a growth mindset."
        center />


      <div className="grid gap-5 md:grid-cols-2">
        {QUADRANTS.map((q, i) =>
          <motion.div
            key={q.key}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-60px'
            }}
            transition={{
              duration: 0.55,
              ease,
              delay: i * 0.1
            }}
            data-cursor-hover
            className="relative overflow-hidden rounded-3xl border border-glass p-7"
            style={{
              background: q.tint,
              backdropFilter: 'blur(16px)'
            }}>

            <div className="mb-5 flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl font-heading text-2xl font-bold text-white"
                style={{
                  background: q.accent + '22',
                  color: q.accent
                }}>

                {q.letter}
              </div>
              <div className="flex items-center gap-2">
                <q.icon
                  size={18}
                  style={{
                    color: q.accent
                  }} />

                <h3 className="font-heading text-xl font-semibold text-white">
                  {q.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-2.5">
              {q.items.map((it) =>
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-sm text-text-secondary">

                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      background: q.accent
                    }} />

                  {it}
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </section>);

}