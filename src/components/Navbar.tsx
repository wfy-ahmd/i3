import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolio';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ease-smooth lg:px-10 ${scrolled ? 'my-3 rounded-2xl glass-strong py-3' : 'py-5'}`}
        aria-label="Primary">
        
        <a
          href="#hero"
          className="font-heading text-2xl font-bold tracking-tight text-white"
          aria-label="Home">
          
          IN<span className="text-[#FF3E7A]">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) =>
          <li key={l.href}>
              <a
              href={l.href}
              className="text-sm text-text-secondary transition-colors duration-300 hover:text-white">
              
                {l.label}
              </a>
            </li>
          )}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#FF3E7A] px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(255,62,122,0.3)] transition-all duration-300 hover:bg-[#ff5489] lg:inline-flex">
          
          Hire Me
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mx-4 mt-1 overflow-hidden rounded-2xl glass-strong p-6 lg:hidden">
          
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((l) =>
            <li key={l.href}>
                  <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-base text-text-secondary transition-colors hover:text-white">
                
                    {l.label}
                  </a>
                </li>
            )}
              <li>
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[#FF3E7A] px-5 py-3 text-center text-sm font-medium text-white">
                
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}