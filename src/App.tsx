import React from 'react';
import { useScreenInit } from './useScreenInit';
import { Background } from './components/effects/Background';
import { Particles } from './components/effects/Particles';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { Loader } from './components/effects/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Swot } from './components/sections/Swot';
import { Interests } from './components/sections/Interests';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
export function App() {
  useScreenInit('home');
  return (
    <div className="relative min-h-screen w-full bg-background font-body text-white">
      <Loader />
      <Background />
      <Particles />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Swot />
        <Interests />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>);

}