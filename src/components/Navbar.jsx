import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-2 shadow-lg backdrop-blur-md dark:bg-slate-900/60">
          <a href="#home" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>Your Name</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a href="#projects" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10">Projects</a>
            <a href="#contact" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10">Contact</a>
          </div>
          <div className="flex items-center gap-1">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl p-2 text-slate-700 hover:bg-white hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl p-2 text-slate-700 hover:bg-white hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:you@example.com" className="rounded-xl p-2 text-slate-700 hover:bg-white hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
