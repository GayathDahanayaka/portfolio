import { projects } from './data/projects';

function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300 ring-1 ring-slate-700">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-brand">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-slate-300">{project.subtitle}</p>
      <p className="mt-4 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-brand hover:text-white"
      >
        View repository →
      </a>
    </article>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-10 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-brand font-semibold uppercase tracking-[0.3em]">Gayath Dahanayaka</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Full Stack Developer, AI Enthusiast, Mobile Developer</h1>
            <p className="max-w-2xl text-slate-300">I build scalable web and mobile applications using modern JavaScript, Python, and mobile frameworks. My portfolio highlights disaster management, healthcare systems, AI-enabled automation, and Android productivity tools.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">View projects</a>
              <a href="#contact" className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-brand">Contact me</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
            <div className="aspect-square overflow-hidden rounded-[1.75rem] bg-slate-800">
              <img src="/profile.jpeg" alt="Gayath Dahanayaka" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-slate-300">Software Engineering undergraduate at SLIIT with hands-on experience in full-stack web apps, mobile development, and AI-powered automation.</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-slate-100">Location:</strong> Sri Lanka</li>
                <li><strong className="text-slate-100">Study:</strong> BSc IT (Hons) Software Engineering</li>
                <li><strong className="text-slate-100">Email:</strong> gayathsanvidu@gmail.com</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6" id="projects">
          <div className="space-y-3">
            <p className="text-brand font-semibold uppercase tracking-[0.3em]">Selected Work</p>
            <h2 className="text-3xl font-bold text-white">Projects built for impact</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-brand font-semibold uppercase tracking-[0.3em]">About</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Professional summary</h2>
              <p className="mt-4 max-w-3xl text-slate-300">
                Ambitious software engineering undergraduate with a strong foundation in full-stack web development, system design, and AI automation. I enjoy solving real-world problems with maintainable code, reliable APIs, and responsive interfaces.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Skills</p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>React, Node.js, Express, MongoDB</li>
                <li>Flutter, Kotlin, Android</li>
                <li>OpenCV, Python, REST APIs</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Career focus</p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Full-stack engineering internships</li>
                <li>AI-enabled product development</li>
                <li>Mobile and scalable backend systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30">
          <div className="space-y-3">
            <p className="text-brand font-semibold uppercase tracking-[0.3em]">Contact</p>
            <h2 className="text-3xl font-bold">Let’s connect</h2>
            <p className="max-w-3xl text-slate-300">I’m ready to discuss internships, team projects, or improvements to your product. Send me a message and I’ll reply quickly.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-6">
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="mt-2 text-slate-300">gayathsanvidu@gmail.com</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-6">
              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              <a href="https://linkedin.com/in/gayath-dahanayaka" target="_blank" rel="noreferrer" className="mt-2 block text-brand hover:text-white">linkedin.com/in/gayath-dahanayaka</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
