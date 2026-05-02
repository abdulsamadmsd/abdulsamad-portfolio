import { motion } from "framer-motion";
import {
  Atom,
  Boxes,
  Code2,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
  Type,
  Wind,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", Icon: Layers },
      { name: "React.js", Icon: Atom },
      { name: "TypeScript", Icon: Type },
      { name: "JavaScript ES6+", Icon: Code2 },
      { name: "Tailwind CSS", Icon: Wind },
      { name: "Modern CSS", Icon: Palette },
      { name: "Framer Motion", Icon: Sparkles }, // ✅ added here
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", Icon: GitBranch },
      { name: "Figma", Icon: Sparkles },
      { name: "shadcn/ui", Icon: Boxes }, // ✅ added here
      { name: "API Integration", Icon: Globe },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "State Management", Icon: Boxes },
      { name: "Responsive Design", Icon: Smartphone },
      { name: "SSR / SSG", Icon: Workflow },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label mb-3">
            02.{" "}
            <span className="text-muted-foreground/60 ml-1">
              Tech I work with
            </span>
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
            Skills & Stack
          </h2>

          <p className="mt-3 text-muted-foreground">
            Technologies and concepts I use to build modern, scalable web
            applications.
          </p>

          <div className="mt-4 h-px w-24 bg-gradient-primary" />
        </motion.div>

        {/* GROUPS */}
        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.title}>
              {/* GROUP TITLE */}
              <h3 className="text-lg font-semibold text-foreground mb-5">
                {group.title}
              </h3>

              {/* SKILL GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {group.skills.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl glow-border bg-gradient-card p-5 sm:p-6 shadow-card transition-all hover:shadow-glow"
                  >
                    {/* glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10" />

                    {/* icon */}
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface-elevated border border-border text-accent transition-all group-hover:border-accent/50 group-hover:shadow-glow-accent">
                      <s.Icon className="h-6 w-6" />
                    </div>

                    {/* name */}
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {s.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
