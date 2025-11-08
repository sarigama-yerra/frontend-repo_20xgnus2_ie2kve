export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 text-center text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React, Tailwind, and a playful 3D hero.
        </p>
      </div>
    </footer>
  );
}
