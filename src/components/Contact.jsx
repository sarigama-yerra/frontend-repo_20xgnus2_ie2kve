import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted. Replace this with your preferred email/API.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Open to opportunities and collaborations. Say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-white outline-none focus:ring-2 ring-neutral-200 dark:ring-neutral-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-white outline-none focus:ring-2 ring-neutral-200 dark:ring-neutral-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-900 dark:text-white outline-none focus:ring-2 ring-neutral-200 dark:ring-neutral-700"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 active:scale-[.99] transition"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
              {status && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{status}</p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
              </div>
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Email</p>
                <a
                  href="mailto:vinayakdwivedi1212@gmail.com"
                  className="font-medium text-neutral-900 dark:text-white hover:underline"
                >
                  vinayakdwivedi1212@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/vinayak-dwivedi-1212vin"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neutral-900 dark:text-white hover:underline break-all"
              >
                www.linkedin.com/in/vinayak-dwivedi-1212vin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
