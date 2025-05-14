
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  useEffect(() => {
    // Add a class to the document element when the component mounts
    document.documentElement.classList.add("scroll-smooth");
    
    // Create a background grid pattern
    const styles = document.createElement("style");
    styles.innerHTML = `
      .bg-grid-white {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
      }
      
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .hero-gradient {
        background: linear-gradient(-45deg, hsl(var(--primary)), hsl(var(--accent)), #3b82f6, #8b5cf6);
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
      }
      
      .cursor-dot {
        mix-blend-mode: difference;
      }
      
      .cursor-trail {
        width: 10px;
        height: 10px;
      }
      
      .hover-effect {
        position: relative;
        z-index: 1;
      }
    `;
    document.head.appendChild(styles);
    
    return () => {
      // Clean up on unmount
      document.documentElement.classList.remove("scroll-smooth");
      document.head.removeChild(styles);
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.1,
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col min-h-screen relative"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <CursorEffect />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
