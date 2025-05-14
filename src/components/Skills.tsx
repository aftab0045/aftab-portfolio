
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);

  const technicalSkills = [
    { name: "React JS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "SQL", level: 75 },
  ];

  const otherSkills = [
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Object-Oriented Programming", level: 80 },
    { name: "Problem Solving", level: 90 },
    { name: "UI/UX Design", level: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const techIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <motion.div
        ref={containerRef}
        id="skills-section"
        className="container mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-value"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6"
              variants={itemVariants}
            >
              Other Skills
            </motion.h3>
            
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-value"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {["React", "JavaScript", "Java", "HTML", "CSS", "Tailwind"].map((tech, index) => (
            <motion.div
              key={tech}
              className="flex flex-col items-center justify-center bg-card p-4 rounded-lg shadow-sm w-full aspect-square hover-effect"
              variants={techIconVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="text-4xl mb-2">
                {tech === "React" && "⚛️"}
                {tech === "JavaScript" && "𝙅𝙎"}
                {tech === "Java" && "☕"}
                {tech === "HTML" && "🌐"}
                {tech === "CSS" && "🎨"}
                {tech === "Tailwind" && "🌊"}
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
