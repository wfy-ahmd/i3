import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
const FOOTER_LINKS = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact',
    href: '#contact'
  }];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
          <div>
            <div className="font-heading text-4xl font-bold text-white">
              IN<span className="text-[#FF3E7A]">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              Crafting intelligent solutions at the intersection of business and
              technology.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((l) =>
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white">

                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Connect
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: LinkedinIcon,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/ilma-niyas-69a15922a/'
                },
                {
                  icon: GithubIcon,
                  label: 'GitHub',
                  href: 'https://github.com/ilmaniyas'
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
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-text-secondary transition-all duration-300 hover:text-[#FF3E7A] hover:border-[#FF3E7A]/40">

                    <s.icon size={16} />
                  </a>
                )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-glass pt-6">
          <p className="text-center text-xs text-mid-dark">
            © 2026 Ilma Niyas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}