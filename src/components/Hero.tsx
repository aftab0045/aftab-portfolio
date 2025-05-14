
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-10 -z-10"></div>
      <div className="absolute inset-0 bg-grid-white/[0.2] -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <div className="mb-6 animate-fade-in">
          <p className="text-lg mb-3 text-muted-foreground">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aftab Attar
          </h1>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-slide-up">
          <span className="text-foreground">Frontend Developer | React JS Developer</span>
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          I craft responsive, user-friendly web experiences with modern 
          JavaScript frameworks and a keen eye for design.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button className="btn-primary">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" className="btn-secondary">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-primary" />
      </a>
    </section>
  );
};

export default Hero;
