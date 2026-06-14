import { useEffect, useRef, useState } from 'react';
import { projects, skills, certifications } from './data/projects';

/* ─── Scroll animation hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="font-mono text-lg font-bold gradient-text">GD.</a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-cyan-500/40"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/5 bg-[#0A0A0F]/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Available for Internship</span>
            </div>

            <div>
              <h1 className="text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl">
                <span className="block text-white">Hi, I'm</span>
                <span className="block gradient-text">Gayath</span>
                <span className="block text-white">Dahanayaka</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
              Full Stack Developer · AI Enthusiast · Mobile Developer
            </p>
            <p className="max-w-xl text-slate-500 leading-relaxed">
              3rd-year Software Engineering undergraduate at SLIIT, building scalable web apps,
              mobile solutions, and AI-powered systems with clean, maintainable code.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
              >
                View My Work
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/GayathDahanayaka"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gayath-dahanayaka-81a350376"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:gayathsanvidu@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Email"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="relative mx-auto animate-float lg:mx-0">
            <div className="gradient-border relative rounded-3xl p-0.5">
              <div className="rounded-3xl bg-[#0F0F1A] p-6">
                <div className="relative h-72 w-64 overflow-hidden rounded-2xl sm:h-80 sm:w-72">
                  <img
                    src="/profile.jpeg"
                    alt="Gayath Dahanayaka"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/60 to-transparent" />
                </div>
                {/* Floating stat badges */}
                <div className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-[#0F0F1A] px-4 py-2.5 shadow-xl">
                  <p className="font-mono text-2xl font-bold text-cyan-400">7+</p>
                  <p className="text-xs text-slate-500">Projects</p>
                </div>
                <div className="absolute -left-4 bottom-16 rounded-xl border border-white/10 bg-[#0F0F1A] px-4 py-2.5 shadow-xl">
                  <p className="font-mono text-2xl font-bold text-purple-400">95%+</p>
                  <p className="text-xs text-slate-500">OMR Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 transition hover:text-slate-400">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-10 w-6 rounded-full border border-slate-700 p-1">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce mx-auto" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-animate grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">About Me</p>
              <h2 className="mt-3 text-4xl font-black text-white">
                Passionate about building <span className="gradient-text">meaningful software</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              I'm a 3rd-year Software Engineering student at SLIIT, Sri Lanka, with hands-on experience
              in full-stack web development, mobile applications, and AI-powered automation. I enjoy
              designing systems that solve real-world problems — from disaster preparedness platforms
              to healthcare management tools.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My approach centers on clean architecture, maintainable code, and Agile practices.
              I'm actively looking for a Software Engineering Internship where I can contribute,
              learn, and grow alongside an experienced team.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'University', value: 'SLIIT' },
                { label: 'Degree', value: 'BSc IT (Hons) SE' },
                { label: 'Year', value: '3rd Year · 2023–2027' },
                { label: 'Location', value: 'Sri Lanka 🇱🇰' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/5 bg-white/3 p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="mt-1 font-semibold text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🚀', number: '7+', label: 'Projects Completed', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/20' },
              { icon: '💻', number: '10+', label: 'Technologies', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/20' },
              { icon: '🏆', number: '4', label: 'Certifications', color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20' },
              { icon: '🎯', number: '95%+', label: 'AI Grading Accuracy', color: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/20' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.color} p-6 transition-all hover:scale-105`}
              >
                <p className="text-3xl">{stat.icon}</p>
                <p className="mt-3 font-mono text-3xl font-black text-white">{stat.number}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills Section ─── */
function Skills() {
  const skillColors = {
    'Languages': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5',
    'Frontend': 'text-purple-400 border-purple-500/30 bg-purple-500/5',
    'Backend & APIs': 'text-blue-400 border-blue-500/30 bg-blue-500/5',
    'Architecture': 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5',
    'Mobile': 'text-green-400 border-green-500/30 bg-green-500/5',
    'Databases': 'text-orange-400 border-orange-500/30 bg-orange-500/5',
    'Tools': 'text-pink-400 border-pink-500/30 bg-pink-500/5',
    'AI & CV': 'text-teal-400 border-teal-500/30 bg-teal-500/5',
    'Cloud': 'text-sky-400 border-sky-500/30 bg-sky-500/5',
  };

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Technical Skills</p>
          <h2 className="mt-3 text-4xl font-black text-white">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A diverse toolkit spanning full-stack development, mobile, AI, and modern software architecture.
          </p>
        </div>

        <div className="section-animate grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => {
            const colorClass = skillColors[category] || 'text-slate-400 border-slate-500/30 bg-slate-500/5';
            return (
              <div
                key={category}
                className="rounded-2xl border border-white/5 bg-white/3 p-5 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/3"
              >
                <p className={`text-xs font-bold uppercase tracking-widest ${colorClass.split(' ')[0]}`}>
                  {category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects Section ─── */
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/3 p-6 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-2xl shadow-lg`}>
          {project.icon}
        </div>
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
              Featured
            </span>
          )}
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 space-y-2">
        <h3 className="text-lg font-bold text-white transition-all group-hover:text-cyan-400">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-400">{project.subtitle}</p>
        <p className="text-sm text-slate-500 leading-relaxed">
          {expanded ? project.longDescription : project.description}
        </p>
        {project.longDescription !== project.description && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            {expanded ? '← Less' : 'Read more →'}
          </button>
        )}
      </div>

      {/* Stack badges */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/8 bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group/link flex items-center gap-2 text-sm text-slate-400 transition-all hover:text-cyan-400"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
          <svg className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Mobile', 'AI / Computer Vision'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-animate text-center mb-12">
          <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Portfolio</p>
          <h2 className="mt-3 text-4xl font-black text-white">
            Projects built for <span className="gradient-text">real impact</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            From healthcare platforms to AI-powered grading systems — each project solves a real-world problem.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="section-animate mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                filter === cat
                  ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-white/3 text-slate-400 hover:border-white/20 hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="section-animate grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certifications Section ─── */
function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Credentials</p>
          <h2 className="mt-3 text-4xl font-black text-white">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="section-animate grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Education card */}
          <div className="gradient-border relative rounded-2xl bg-[#0F0F1A] p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-2xl shadow-lg">
                🎓
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Education</p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Sri Lanka Institute of Information Technology
                </h3>
                <p className="mt-1 text-slate-400">BSc (Hons) Information Technology</p>
                <p className="text-slate-400">Specialized in Software Engineering</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    2023 – 2027
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    3rd Year
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications list */}
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/3 p-4 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/3"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">{cert.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-animate relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/3 to-transparent p-8 lg:p-14">
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">Get In Touch</p>
                <h2 className="mt-3 text-4xl font-black text-white">
                  Let's build something <span className="gradient-text">great together</span>
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I'm actively seeking a Software Engineering Internship. If you're looking for a motivated
                developer who brings clean code, problem-solving, and genuine passion to every project —
                let's talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:gayathsanvidu@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'gayathsanvidu@gmail.com',
                  href: 'mailto:gayathsanvidu@gmail.com',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: 'LinkedIn',
                  value: 'gayath-dahanayaka-81a350376',
                  href: 'https://www.linkedin.com/in/gayath-dahanayaka-81a350376',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: 'GitHub',
                  value: 'GayathDahanayaka',
                  href: 'https://github.com/GayathDahanayaka',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+94 76 671 9014',
                  href: 'tel:+94766719014',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/3 p-4 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 text-slate-600 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="font-mono text-sm font-bold gradient-text">GD.</p>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Gayath Dahanayaka · Built with React & Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/GayathDahanayaka" target="_blank" rel="noreferrer" className="text-slate-600 transition hover:text-slate-400" aria-label="GitHub">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gayath-dahanayaka-81a350376" target="_blank" rel="noreferrer" className="text-slate-600 transition hover:text-slate-400" aria-label="LinkedIn">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Root App ─── */
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
