
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <div className="relative max-w-sm mx-auto md:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/lovable-uploads/fc50e885-f014-42c0-bb1b-df24e9c75813.png"
                    alt="Aftab Attar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            
            <p className="text-muted-foreground">
              I'm a passionate Frontend Developer focused on building interactive, 
              accessible, and responsive web applications using modern technologies. 
              With strong foundations in JavaScript and React, I create seamless 
              user experiences that delight.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover-effect">
                <GraduationCap className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Education</h4>
                <p className="text-sm text-center text-muted-foreground">Computer Engineering</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover-effect">
                <Briefcase className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Experience</h4>
                <p className="text-sm text-center text-muted-foreground">Frontend Development</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover-effect">
                <Heart className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Interests</h4>
                <p className="text-sm text-center text-muted-foreground">Cube Solving, Chess, Travelling</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary hover-effect" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" className="btn-secondary hover-effect" asChild>
                <a href="/resume.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
