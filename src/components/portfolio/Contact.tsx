import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_3tbr1uh";
const EMAILJS_TEMPLATE_ID = "template_o2ub46i";
const EMAILJS_PUBLIC_KEY = "9bfShquzx9br4UZ8f";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_email: "abdulsamadpak111@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { Icon: Phone, label: "Phone", value: "+92 302 9556006", href: "tel:+923029556006" },
    { Icon: Mail, label: "Email", value: "abdulsamadpak111@gmail.com", href: "mailto:abdulsamadpak111@gmail.com" },
    { Icon: MapPin, label: "Location", value: "Islamabad, Pakistan", href: "#" },
    { Icon: Github, label: "GitHub", value: "abdulsamadmsd", href: "https://github.com/abdulsamadmsd" },
    { Icon: Linkedin, label: "LinkedIn", value: "abdulsamadmsd5", href: "https://linkedin.com/in/abdulsamadmsd5" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[400px] w-[600px] rounded-full bg-accent/15 blur-[140px]" />

      <div className="mx-auto max-w-5xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">05. <span className="text-muted-foreground/60 ml-1">Let's collaborate</span></p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-gradient">
            Let's build something great together.
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Have a project in mind, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glow-border bg-gradient-card p-7 sm:p-8 shadow-card"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">Contact info</h3>
            <p className="text-sm text-muted-foreground mt-1">Reach out via any channel below.</p>

            <ul className="mt-6 space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-surface-elevated border border-border p-4 transition-all hover:border-accent/40 hover:shadow-glow-accent"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <c.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.7rem] uppercase tracking-wider text-accent">{c.label}</p>
                      <p className="text-sm text-foreground truncate">{c.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl glow-border bg-gradient-card p-7 sm:p-8 shadow-card space-y-5"
          >
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-accent">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-accent">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-accent">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                className="mt-2 w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:shadow-glow-accent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {sending ? (
                <>
                  Sending…
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
