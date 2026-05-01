import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Abdul Samad · Designed & built with{" "}
          <span className="text-accent">React</span> & <span className="text-accent">Tailwind CSS</span>
        </p>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/abdulsamadmsd", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/abdulsamadmsd5", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:abdulsamadpak111@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full bg-surface-elevated border border-border text-muted-foreground transition-all hover:text-accent hover:border-accent/50"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
