import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "School Management System",
    summary:
      "A full-featured CRUD platform for managing student records, faculty data, and enrollment workflows — with searchable, paginated tables and role-based navigation.",
    bullets: [
      "Dynamic data tables with advanced filtering & pagination",
      "Role-based navigation tailored for admin efficiency",
      "Optimized UI/UX for handling large datasets",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "from-primary/30 to-accent/20",
  },
  {
    title: "ZK E-Commerce Store",
    summary:
      "A modern, production-ready e-commerce storefront featuring a curated product catalog, intuitive category browsing, and a seamless cart-to-checkout experience — engineered for speed, accessibility, and conversion across every device.",
    bullets: [
      "Dynamic product catalog with category filtering & search",
      "Persistent shopping cart with smooth add-to-cart interactions",
      "Fully responsive, mobile-first UI with optimized performance",
      "Deployed on Vercel with edge-ready architecture",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "from-accent/30 to-primary/20",
    liveUrl: "https://zk-ecommerce-store.vercel.app/",
  },
  {
    title: "Professional Developer Portfolio",
    summary:
      "A high-performance personal brand site with modular architecture, server-side rendering for SEO, and refined motion design powered by Framer Motion.",
    bullets: [
      "SSR-powered for SEO and fast initial loads",
      "Modular component architecture",
      "Smooth scroll animations & dark-mode toggle",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    accent: "from-primary/30 to-accent/30",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">04. <span className="text-muted-foreground/60 ml-1">Things I've built</span></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">Selected Work</h2>
          <div className="mt-4 h-px w-24 bg-gradient-primary" />
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Visual */}
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl glow-border bg-gradient-card shadow-card transition-all hover:shadow-elevated">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
                    <div className="absolute inset-0 [background-image:linear-gradient(hsl(220_20%_92%/0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(220_20%_92%/0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
                    {/* mock browser */}
                    <div className="absolute inset-6 sm:inset-10 rounded-2xl glass shadow-elevated overflow-hidden">
                      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
                        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                        <span className="ml-3 font-mono text-[10px] sm:text-xs text-muted-foreground truncate">
                          {p.liveUrl ? p.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${p.title.toLowerCase().replace(/\s+/g, "-")}.app`}
                        </span>
                      </div>
                      <div className="p-4 sm:p-6 space-y-2.5">
                        <div className="h-3 w-2/3 rounded bg-foreground/15" />
                        <div className="h-2.5 w-full rounded bg-foreground/8" />
                        <div className="h-2.5 w-5/6 rounded bg-foreground/8" />
                        <div className="grid grid-cols-3 gap-2 pt-3">
                          <div className="aspect-video rounded bg-gradient-primary/40" />
                          <div className="aspect-video rounded bg-accent/30" />
                          <div className="aspect-video rounded bg-primary/30" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="h-7 rounded bg-gradient-primary/60" />
                          <div className="h-7 rounded bg-foreground/10" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <p className="font-mono text-xs text-accent mb-3">Featured Project · 0{i + 1}</p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{p.title}</h3>
                  <div className="mt-4 rounded-2xl glass p-5 shadow-card">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="GitHub repo"
                      className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated border border-border text-muted-foreground transition-all hover:text-accent hover:border-accent/50"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={p.liveUrl ?? "#"}
                      target={p.liveUrl ? "_blank" : undefined}
                      rel={p.liveUrl ? "noopener noreferrer" : undefined}
                      aria-label="Live demo"
                      className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated border border-border text-muted-foreground transition-all hover:text-accent hover:border-accent/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
