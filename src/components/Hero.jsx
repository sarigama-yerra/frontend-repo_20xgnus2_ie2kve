import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NZ3Wq8rXMYC9s-mN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh]">
        <div className="max-w-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border border-black/5 dark:border-white/10">
          <p className="text-sm uppercase tracking-widest text-neutral-600 dark:text-neutral-400">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Vinayak Dwivedi
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Frontend developer crafting delightful, performant user interfaces with React, TypeScript, and modern tooling. Passionate about design systems, accessibility, and 3D interactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 active:scale-[.99] transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinayak-dwivedi-1212vin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium shadow border border-black/10 hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:border-white/10"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
