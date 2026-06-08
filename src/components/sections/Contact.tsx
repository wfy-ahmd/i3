import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  GithubIcon,
  GlobeIcon,
  SendIcon,
  CheckCircle2Icon
} from
  'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { CONTACTS } from '../../data/portfolio';
const ICONS: Record<string, React.ElementType> = {
  Mail: MailIcon,
  Phone: PhoneIcon,
  MapPin: MapPinIcon,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Globe: GlobeIcon
};
const ease = [0.22, 1, 0.36, 1] as const;
export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3500);
    }, 1100);
  };
  const inputCls =
    'w-full rounded-xl border border-glass bg-white/5 px-4 py-3 text-sm text-white placeholder:text-mid-dark transition-colors duration-300 focus:border-[#FF3E7A]/50 focus:outline-none';
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

      <SectionHeader
        index="10"
        eyebrow="Let's Connect"
        title="Let's Build Something Meaningful"
        center
        subtitle="Open to internships, undergraduate opportunities, and innovative collaborations. Let's build something great together." />


      <div className="grid gap-6 lg:grid-cols-2">
        {/* contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACTS.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{
                  opacity: 0,
                  y: 20
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
                  duration: 0.45,
                  ease,
                  delay: i * 0.06
                }}
                whileHover={{
                  y: -4
                }}
                data-cursor-hover
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-colors duration-300 hover:border-[#FF3E7A]/30">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF3E7A]/10 text-[#FF3E7A] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-secondary">{c.label}</p>
                  <p className="truncate text-sm font-medium text-white">
                    {c.value}
                  </p>
                </div>
              </motion.a>);

          })}
        </div>

        {/* form */}
        <motion.form
          onSubmit={handleSubmit}
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
            margin: '-40px'
          }}
          transition={{
            duration: 0.55,
            ease
          }}
          className="rounded-3xl glass-strong p-7">

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-text-secondary">

                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                }
                className={inputCls}
                placeholder="Your name" />

            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-text-secondary">

                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
                className={inputCls}
                placeholder="you@example.com" />

            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-text-secondary">

                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value
                  })
                }
                className={`${inputCls} resize-none`}
                placeholder="Tell me about the opportunity..." />

            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF3E7A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(255,62,122,0.3)] transition-all duration-300 hover:bg-[#ff5489] disabled:opacity-70">

              {status === 'idle' &&
                <>
                  <SendIcon size={16} /> Send Message
                </>
              }
              {status === 'submitting' && 'Sending...'}
              {status === 'success' &&
                <>
                  <CheckCircle2Icon size={16} /> Message Sent
                </>
              }
            </button>
          </div>
        </motion.form>
      </div>
    </section>);

}