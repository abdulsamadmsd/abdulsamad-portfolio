import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-16">
      <div className="mx-auto max-w-7xl container-px py-12 flex flex-col gap-8">
        {/* TOP TEXT */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Thanks for visiting my portfolio. I'm always open to discussing new
            opportunities and interesting projects.
          </p>
        </div>

        {/* MAIN ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <p className="font-mono text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Abdul Samad · Built with{" "}
            <span className="text-accent">React</span>,{" "}
            <span className="text-accent">Tailwind CSS</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-3">
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
                className="group grid h-9 w-9 place-items-center rounded-full bg-surface-elevated border border-border text-muted-foreground transition-all hover:text-accent hover:border-accent/50 hover:shadow-glow-accent"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            ))}

            {/* BACK TO TOP */}
            <a
              href="#home"
              aria-label="Back to top"
              className="group grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-all hover:-translate-y-1 hover:shadow-glow-accent"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
