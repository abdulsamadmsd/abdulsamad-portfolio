import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Abdul Samad — Frontend Developer | React, Next.js & TypeScript";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Abdul Samad — Frontend Developer based in Islamabad. Building modern, scalable web apps with React, Next.js, TypeScript & Tailwind CSS."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD person schema
    const ldId = "person-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = ldId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdul Samad",
      jobTitle: "Frontend Developer",
      url: window.location.origin,
      email: "mailto:abdulsamadpak111@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
      sameAs: [
        "https://github.com/abdulsamadmsd",
        "https://linkedin.com/in/abdulsamadmsd5",
      ],
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
