import { motion } from "framer-motion";
import { Code2, Smartphone, ShoppingBag, Figma } from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Pixel-perfect, performant interfaces built with React & Next.js — type-safe, scalable, and production-ready.",
  },
  {
    Icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Mobile-first, fluid layouts that look stunning on every device — from compact phones to ultra-wide displays.",
  },
  {
    Icon: ShoppingBag,
    title: "E-Commerce & Dashboards",
    desc: "Storefronts, admin panels, and CRUD applications with clean UX, robust state management, and fast checkout flows.",
  },
  {
    Icon: Figma,
    title: "Figma to Code",
    desc: "Translating design files into production-ready, reusable React components with strict design-system fidelity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">03. <span className="text-muted-foreground/60 ml-1">What I offer</span></p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">Services</h2>
          <div className="mt-4 h-px w-24 bg-gradient-primary" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glow-border bg-gradient-card p-7 sm:p-8 shadow-card transition-all hover:shadow-elevated"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="h-px w-6 bg-accent" />
                  Available for projects
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
