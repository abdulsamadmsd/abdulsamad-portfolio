import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ZK E-Commerce Store",
    image: "/projects/zkecommerce.webp",
    summary:
      "A modern, production-ready e-commerce storefront featuring a curated product catalog, intuitive category browsing, and a seamless cart-to-checkout experience.",
    bullets: [
      "Dynamic product catalog with filtering & search",
      "Persistent shopping cart",
      "Responsive UI with optimized performance",
      "Deployed on Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://zk-ecommerce-store.vercel.app/",
    github: "https://github.com/abdulsamadmsd/zk-ecommerce-store",
  },
  {
    title: "Personal Developer Portfolio",
    image: "/projects/abdulsamadportfolio.webp",
    summary:
      "A personal portfolio built with React and TypeScript, featuring smooth animations, dark mode, and a clean modular component structure.",
    bullets: [
      "Built with React + TypeScript for type-safe, maintainable code",
      "Animated UI using Framer Motion with dark mode support",
      "Modular architecture using shadcn/ui and Tailwind CSS",
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
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">Selected Work</h2>
          <p className="text-muted-foreground mt-2">
            Some of my recent projects
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((p, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <img
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={500}
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover ..."
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>

                  <p className="text-muted-foreground mt-3">{p.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground">
                        • {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href={p.github}
                      target="_blank"
                      className="p-2 border rounded-full hover:text-accent"
                    >
                      <Github size={18} />
                    </a>

                    <a
                      href={p.liveUrl}
                      target="_blank"
                      className="p-2 border rounded-full hover:text-accent"
                    >
                      <ExternalLink size={18} />
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
