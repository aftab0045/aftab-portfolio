
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors duration-200">
              <div className="absolute left-0 sm:left-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="h-full w-px bg-border absolute top-24 left-10 z-0"></div>
              </div>
              
              <Card className="w-full sm:ml-16 card-hover border border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle>Web Developer Intern</CardTitle>
                      <CardDescription>NoQs Digital Pvt. Ltd.</CardDescription>
                    </div>
                    <div className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full w-fit">
                      JAN 2024 - FEB 2024
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Built responsive user interfaces using React JS and modern web technologies.
                    </li>
                    <li>
                      Collaborated with senior developers to implement new features and fix bugs.
                    </li>
                    <li>
                      Integrated REST APIs with frontend components to create dynamic web applications.
                    </li>
                    <li>
                      Participated in code reviews and implemented feedback to improve code quality.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
