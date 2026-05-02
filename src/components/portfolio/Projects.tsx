import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ZK E-Commerce Store",
    image: "/projects/zkecommerce.webp",
    summary:
      "A modern, production-ready e-commerce storefront with a clean UI, optimized performance, and a seamless shopping experience.",
    bullets: [
      "Dynamic product catalog with filtering & search",
      "Persistent shopping cart with local storage",
      "Fully responsive UI with performance optimization",
      "Deployed on Vercel for fast global delivery",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://zk-ecommerce-store.vercel.app/",
    github: "https://github.com/abdulsamadmsd/zk-ecommerce-store",
  },
  {
    title: "Personal Developer Portfolio",
    image: "/projects/abdulsamadportfolio.webp",
    summary:
      "A modern portfolio showcasing projects, skills, and animations with a focus on performance and clean UI design.",
    bullets: [
      "Built with React + TypeScript for scalable architecture",
      "Smooth animations using Framer Motion",
      "Dark mode with clean, reusable UI components",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    liveUrl: "https://abdulsamadmsd.vercel.app/",
    github: "https://github.com/abdulsamadmsd/abdulsamad-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-bold">Selected Work</h2>
          <p className="text-muted-foreground mt-3">
            A selection of projects showcasing my frontend development skills,
            focusing on performance, scalability, and user experience.
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((p, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>

                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {p.summary}
                  </p>

                  {/* BULLETS */}
                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-accent">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* STACK */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-border rounded-full bg-surface-elevated"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center gap-4 mt-7">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm hover:text-accent transition"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
