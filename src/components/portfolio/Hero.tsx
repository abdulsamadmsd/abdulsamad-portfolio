import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/hero-portrait.jpg";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Engineer",
  "UI Builder",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px] animate-float-slow [animation-delay:-3s]" />
      </div>

      <div className="relative mx-auto max-w-7xl container-px w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-accent mb-5"
          >
            👋 Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Abdul Samad.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-muted-foreground min-h-[1.2em]"
          >
            I'm a{" "}
            <span className="text-gradient-brand">
              {text}
              <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-accent align-middle animate-pulse" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I craft modern, scalable, and user-friendly web experiences with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span> &{" "}
            <span className="text-foreground font-medium">TypeScript</span> —
            turning ideas into clean, performant interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/abdul-samad-cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full glow-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:shadow-glow-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/abdulsamadmsd",
                label: "GitHub",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/abdulsamadmsd5",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:abdulsamadpak111@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full bg-surface-elevated border border-border text-muted-foreground transition-all hover:text-accent hover:border-accent/50 hover:shadow-glow-accent"
              >
                <Icon className="h-4.5 w-4.5" size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
            {/* spinning ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary p-[3px] animate-gradient">
              <div className="h-full w-full rounded-full bg-background" />
            </div>
            {/* pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse-ring" />
            <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse-ring [animation-delay:-1.2s]" />

            <div className="absolute inset-3 overflow-hidden rounded-full bg-background shadow-elevated">
              <img
                src={profileImg}
                alt="Abdul Samad — Frontend Developer"
                width={460}
                height={460}
                className="h-full w-full object-cover"
                style={{ objectPosition: "43% 18%" }}
              />
            </div>

            {/* floating badges */}
            {[
              { label: "Next.js", top: "5%", left: "-12%", delay: 0 },
              { label: "Reactjs", top: "18%", right: "-14%", delay: 0.4 },
              { label: "TypeScript", top: "50%", left: "-16%", delay: 0.8 },
              { label: "Zustand", top: "50%", right: "-14%", delay: 1.2 },
              { label: "TailwindCss", bottom: "15%", left: "-12%", delay: 1.6 },
              { label: "Git", bottom: "5%", right: "-12%", delay: 2.0 },
            ].map((b: any) => (
              <div
                key={b.label}
                style={{
                  top: b.top,
                  left: b.left,
                  right: b.right,
                  bottom: b.bottom,
                  animationDelay: `${b.delay}s`,
                }}
                className="absolute glass rounded-full px-3.5 py-1.5 font-mono text-xs text-foreground shadow-card animate-float-slow"
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
