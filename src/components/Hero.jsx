import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 py-28 md:py-36 flex flex-col items-start gap-8 max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur border border-white/10">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-cyan-100">Tech • Portfolio • Interactive</span>
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Hi, I’m <span className="text-cyan-300">Your Name</span> —
          <br className="hidden md:block" />
          Embedded Systems & Front‑End Developer
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-200/90">
          B.Tech in ECE (AI & ML) at Gautam Buddha University (2024–2028). I build real-time embedded
          systems and modern web interfaces. Currently developing quadcopter flight controller firmware
          focused on stability and performance, while learning ROS for robotics.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 transition">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
