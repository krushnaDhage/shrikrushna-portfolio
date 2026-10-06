import { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger subtle confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);

    // Open mailto fallback to send directly from user's email client
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Have an opportunity, project, or idea? Let's connect. I'm actively seeking software engineering internships and collaborative full-stack initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                    Email Address
                  </h3>
                  <span className="text-xs text-slate-400">Direct response within 24 hours</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200">
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-xs sm:text-sm text-purple-300 dark:text-purple-600 truncate hover:underline"
                >
                  {profileData.email}
                </a>

                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg hover:border-blue-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    Connect on LinkedIn
                  </h3>
                  <span className="text-xs text-slate-400">Professional profile & networking</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0e17]/85 dark:bg-[#0c0e17]/85 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg hover:border-purple-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors">
                    Explore GitHub Code
                  </h3>
                  <span className="text-xs text-slate-400">Open-source contributions</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </a>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0e17]/90 dark:bg-[#0c0e17]/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to initialize a conversation. Submitting opens your verified email client with the message pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase mb-1">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase mb-1">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / System collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase mb-1">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shrikrushna, we reviewed your Java Spring Boot and full-stack portfolio..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/30 transition-all duration-200 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail Client</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message formatted! If your email client didn't open automatically, feel free to write directly to <strong>{profileData.email}</strong>.</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
