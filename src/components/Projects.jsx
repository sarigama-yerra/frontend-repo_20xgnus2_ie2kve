import { Code2, Globe, Smartphone, Github } from 'lucide-react';

const projects = [
  {
    title: 'UI Component Library',
    icon: Code2,
    description:
      'A modular, themeable component system built with accessibility and performance in mind.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/',
  },
  {
    title: 'Marketing Website',
    icon: Globe,
    description:
      'A fast-loading, SEO-friendly site with delightful micro-interactions and animations.',
    tech: ['Vite', 'React', 'Framer Motion'],
    link: 'https://github.com/',
  },
  {
    title: 'Mobile Companion App',
    icon: Smartphone,
    description:
      'Cross-platform app with offline support and realtime sync using modern APIs.',
    tech: ['Expo', 'React Native'],
    link: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-50/60 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A few highlights. Ask to swap in your real work and links.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, icon: Icon, description, tech, link }) => (
            <article
              key={title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
