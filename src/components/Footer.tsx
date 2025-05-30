
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-bold text-xl text-primary">
              Aftab Attar
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Web Developer | Software Developer | Java Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aftab-attar-344094268/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/aftab0045"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/aftab_attar_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} - Built with ❤️ by Aftab Attar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
