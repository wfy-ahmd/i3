import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  DownloadIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  RocketIcon,
  ChevronDownIcon
} from
  'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { CountUp } from '../ui/CountUp';
import { HERO_STATS } from '../../data/portfolio';

const ROLES = ['Business Analyst', 'Project Manager'];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(t);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  // Split the current role into characters for staggered animation
  const currentRole = ROLES[roleIdx];
  const subtitle = 'IT Undergraduate';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center px-6 pt-28 pb-16 lg:px-10">

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-text-secondary">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF3E7A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF3E7A]" />
            </span>
            Available for Internships &amp; Undergraduate Roles
          </motion.div>

          <h1 className="font-heading text-hero font-bold">
            <motion.span
              className="inline-block text-white mr-4"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                ease,
                delay: 0.1
              }}>

              ILMA
            </motion.span>
            <motion.span
              className="inline-block text-gradient"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                ease,
                delay: 0.2
              }}>

              NIYAS
            </motion.span>
          </h1>

          {/* Animated role text with beautiful transitions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="mt-5 flex h-10 items-center font-num text-lg font-semibold tracking-wide overflow-hidden">

            <div className="relative flex items-center">
              <div className="flex min-w-[155px] items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="whitespace-nowrap text-soft-pink font-bold"
                  >
                    {currentRole}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="mx-3 text-mid-dark text-xl">·</span>
              <span className="text-mid-dark whitespace-nowrap">{subtitle}</span>
            </div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.45
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">

            Transforming business challenges into technology-driven solutions
            through analytical thinking, strategic planning, and digital
            innovation.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.55
            }}
            className="mt-9 flex flex-wrap items-center gap-4">

            <MagneticButton variant="primary" href="/CV/Ilma_Niyas_CV.pdf" target="_blank" rel="noopener noreferrer">
              <DownloadIcon size={16} /> Download CV
            </MagneticButton>
            <MagneticButton variant="secondary" href="#contact">
              Let's Connect <ArrowRightIcon size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.7
            }}
            className="mt-9 flex items-center gap-3">

            {[
              {
                icon: LinkedinIcon,
                label: 'LinkedIn',
                href: 'https://lk.linkedin.com/in/ilma-niyas-2848a9337'
              },
              {
                icon: GithubIcon,
                label: 'GitHub',
                href: 'https://github.com/ilmaniyas077-dev'
              },
              {
                icon: MailIcon,
                label: 'Email',
                href: 'mailto:ilmamnf5@gmail.com'
              }].
              map((s) =>
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full glass text-text-secondary transition-all duration-300 hover:text-[#FF3E7A] hover:border-[#FF3E7A]/40">

                  <s.icon size={18} />
                </a>
              )}
          </motion.div>
        </div>

        {/* RIGHT - profile card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 30
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease,
            delay: 0.4
          }}
          className="relative mx-auto w-full max-w-md">

          <div className="animate-float">
            <div className="relative overflow-hidden rounded-3xl glass-strong p-3">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/profile.PNG"
                  alt="Ilma Niyas portrait"
                  className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-secondary lg:flex"
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>

        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDownIcon size={18} />
      </motion.a>
    </section>);

}