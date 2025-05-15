
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Coding Competition Platform",
      description: "A platform for hosting coding competitions with real-time evaluation and leaderboards.",
      image: "https://www.code-art.com/best-coding-competitions-2024/",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://github.com/aftab0045/Real-Time-Coding-Competition-",
      githubLink: "https://github.com/aftab0045/Real-Time-Coding-Competition-",
    },
    {
      id: 2,
      title: "Cab Compare",
      description: "An application that compares cab prices across different providers to help users find the best deal.",
      image: "https://curlytales.com/this-app-helps-in-booking-cheapest-cab-rides-in-india-heres-how/",
      technologies: ["React", "Firebase", "Tailwind CSS", "Google Maps API"],
      liveLink: "https://github.com/aftab0045/Cab-Compare-Platform",
      githubLink: "https://github.com/aftab0045/Cab-Compare-Platform",
    },
    {
      id: 3,
      title: "Sorting Visualizer",
      description: "A web application that visualizes various sorting algorithms to help users understand how they work.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveLink: "https://github.com/aftab0045/Sorting-Visualizer",
      githubLink: "https://github.com/aftab0045/Sorting-Visualizer",
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description: "An intelligent chatbot application built with modern AI technologies to provide responsive and helpful interactions.",
      image: "https://stock.adobe.com/search?k=chatbot+ai",
      technologies: ["React", "OpenAI API", "Node.js", "Express"],
      liveLink: "https://github.com/aftab0045/AI-Chat-Bot",
      githubLink: "https://github.com/aftab0045/AI-Chat-Bot",
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="hover-effect"
            >
              <Card className="card-hover overflow-hidden border border-border bg-card h-full">
                <div className="overflow-hidden h-48 group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink size={32} className="text-white" />
                  </motion.div>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs hover-effect"
                        whileHover={{ scale: 1.1, backgroundColor: 'hsla(var(--primary)/0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <motion.div variants={buttonVariants} whileHover="hover" className="hover-effect">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" className="hover-effect">
                    <Button variant="default" size="sm" className="gap-2" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="hover-effect">
            <Button className="btn-primary" asChild>
              <a href="https://github.com/aftab0045" target="_blank" rel="noopener noreferrer">
                View More Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
