
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.E. in Computer Engineering",
      institution: "AISSMS IOIT, Pune",
      duration: "2019 - 2023",
      grade: "8.45 CGPA",
      details: [
        "Focused on core computer science concepts and software development",
        "Completed projects in web development and data structures",
        "Active participant in coding competitions and hackathons"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Junior College",
      duration: "2017 - 2019",
      grade: "92.90%",
      details: []
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "High School",
      duration: "2016 - 2017",
      grade: "87.20%",
      details: []
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Subject Topper in Machine Learning",
      provider: "University",
      date: "2025",
      score: "92 marks"
    },
    {
      id: 2,
      title: "Java Programming Masterclass",
      provider: "Udemy",
      date: "2022",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      provider: "AlgoPrep",
      date: "2022",
    },
    {
      id: 4,
      title: "React - The Complete Guide",
      provider: "NamasteDev",
      date: "2023",
    },
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Academic Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.id} 
                  className="card-hover border border-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {edu.duration}
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {edu.details.length > 0 && (
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Certifications & Training
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.id} 
                  className="card-hover border border-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <CardTitle>{cert.title}</CardTitle>
                        <CardDescription>{cert.provider}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {cert.date}
                        </span>
                        {cert.score && (
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {cert.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 mt-6 animate-fade-in">
              <h4 className="font-semibold mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "NPM", "REST API", "JSON", "Responsive Design", "Debugging"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
