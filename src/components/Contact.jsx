import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white to-slate-50 py-20 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let’s connect</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project in mind or just want to say hi? Drop a message.</p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800 dark:border-green-700/40 dark:bg-green-900/20 dark:text-green-200">
            Thanks! Your message was captured locally for this demo. Replace with your email/API.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-600 dark:text-slate-300">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-600 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label className="mb-1 text-sm text-slate-600 dark:text-slate-300">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800 dark:bg-white dark:text-slate-900">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
