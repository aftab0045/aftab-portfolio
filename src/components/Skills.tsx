
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById("skills-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

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

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div id="skills-section" className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-value"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
            
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-value"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {["React", "JavaScript", "Java", "HTML", "CSS", "Tailwind"].map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center justify-center bg-card p-4 rounded-lg shadow-sm w-full aspect-square"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
