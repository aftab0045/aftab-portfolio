
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; speed: number }[]>([]);

  // Create stars for background
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.5 + 0.1
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    
    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, []);

  // Update star positions
  useEffect(() => {
    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          y: star.y <= 0 ? window.innerHeight : star.y - star.speed
        }))
      );
    };
    
    const intervalId = setInterval(animateStars, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const calculateParallax = (strength: number = 0.02) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mousePosition.x - centerX) * strength;
    const deltaY = (mousePosition.y - centerY) * strength;
    
    return { x: deltaX, y: deltaY };
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 -z-20">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              top: star.y,
              left: star.x,
              width: star.size,
              height: star.size,
              opacity: star.opacity
            }}
            animate={{
              y: star.y - star.speed
            }}
            transition={{
              repeat: Infinity,
              duration: 0.03,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Gradient background with parallax effect */}
      <motion.div 
        className="absolute inset-0 hero-gradient opacity-10 -z-10"
        animate={calculateParallax(0.01)}
        transition={{ type: "spring", damping: 15 }}
      ></motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-grid-white/[0.2] -z-10"
        animate={calculateParallax(0.02)}
        transition={{ type: "spring", damping: 15 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center z-10">
        <motion.div 
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <p className="text-lg mb-3 text-muted-foreground">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aftab Attar
          </h1>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-6"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          <span className="text-foreground">Full Stack Developer | Software Developer</span>
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I craft responsive, user-friendly web experiences with modern 
          JavaScript frameworks and a keen eye for design.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.div whileHover="hover" variants={buttonVariants}>
            <Button className="btn-primary relative overflow-hidden group">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full opacity-10 group-hover:w-32 group-hover:h-32 -z-10"></span>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
          <motion.div whileHover="hover" variants={buttonVariants}>
            <Button variant="outline" className="btn-secondary relative overflow-hidden group">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary rounded-full opacity-10 group-hover:w-32 group-hover:h-32 -z-10"></span>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-6 mb-12"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://www.linkedin.com/in/aftab-attar-344094268/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover-effect"
            aria-label="LinkedIn"
            variants={socialItemVariants}
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/aftab0045"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover-effect"
            aria-label="GitHub"
            variants={socialItemVariants}
            whileHover="hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/aftab_attar_"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover-effect"
            aria-label="Twitter"
            variants={socialItemVariants}
            whileHover="hover"
          >
            <Twitter size={24} />
          </motion.a>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover-effect"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} className="text-primary animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
