import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import profileImg from "@/assets/hero-portrait.jpg";

const SectionHeader = ({
  num,
  title,
  subtitle,
}: {
  num: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <p className="section-label mb-3">
      {num}. <span className="text-muted-foreground/60 ml-1">{subtitle}</span>
    </p>
    <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      {title}
    </h2>
    <div className="mt-4 h-px w-24 bg-gradient-primary" />
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader num="01" title="About Me" subtitle="Who I am" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a{" "}
              <span className="text-foreground font-medium">
                Frontend Developer
              </span>{" "}
              focused on building fast, scalable, and user-friendly web
              applications. I work primarily with{" "}
              <span className="text-accent">React</span>,{" "}
              <span className="text-accent">Next.js</span>, and{" "}
              <span className="text-accent">TypeScript</span> to create clean,
              maintainable, and responsive interfaces.
            </p>

            <p>
              I have hands-on experience developing real-world applications —
              including e-commerce platforms, dashboards, and dynamic web apps —
              with a strong focus on{" "}
              <span className="text-foreground">performance</span>, reusable
              components, and intuitive user experience.
            </p>

            <p>
              I enjoy solving real problems through code and continuously
              improving my skills. My goal is to contribute to meaningful
              projects and grow as a professional developer in a collaborative
              environment.
            </p>

            {/* TRUST + CTA */}
            <p className="text-sm text-muted-foreground pt-2">
              Currently open to frontend opportunities and collaborations.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ y: -6 }}
                className="glow-border rounded-2xl bg-gradient-card p-5 shadow-card transition"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Education
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  BS Computer Science
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Gomal University
                </p>

                <p className="font-mono text-xs text-muted-foreground/70 mt-1">
                  4 Years Program
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="glow-border rounded-2xl bg-gradient-card p-5 shadow-card transition"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    Experience
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  Frontend Web Developer
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Invincible Technology, Islamabad
                </p>

                <p className="font-mono text-xs text-muted-foreground/70 mt-1">
                  Sep 2024 – Present
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-square">
              {/* Glow background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />

              {/* Image container */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-primary p-[3px] shadow-elevated">
                <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-background">
                  <img
                    src={profileImg}
                    alt="Abdul Samad portrait"
                    loading="lazy"
                    width={500}
                    height={500}
                    style={{ objectPosition: "43% 18%" }}
                    className="block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
