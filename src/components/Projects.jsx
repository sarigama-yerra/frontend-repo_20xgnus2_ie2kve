import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Quadcopter Flight Controller',
    description:
      'Custom PID-based stabilization firmware for a quadcopter with sensor fusion and real-time telemetry.',
    tags: ['C/C++', 'FreeRTOS', 'IMU', 'PID'],
    icon: Code2,
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A sleek personal site with a 3D interactive hero, smooth animations, and responsive design.',
    tags: ['React', 'Tailwind', 'Spline'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'IoT Device Dashboard',
    description:
      'Realtime device health and control dashboard with charts and alerts.',
    tags: ['React', 'WebSockets', 'Node'],
    icon: Smartphone,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A selection of things I’ve built recently.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-900/5 p-3 text-slate-900 dark:bg-white/10 dark:text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
