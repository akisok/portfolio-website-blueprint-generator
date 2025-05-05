
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Digital Khatabook",
      description: "A digital ledger application built with React and Node.js for managing business transactions and maintaining records of customers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Responsive Portfolio Website",
      description: "A responsive portfolio website that showcases projects and skills, built with HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A weather application that displays the current weather and forecast for any location, built with React and OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["React", "API", "CSS"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className={filter === null ? "bg-teal text-navy" : "text-slate"}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className={filter === tag ? "bg-teal text-navy" : "text-slate"}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-navy border border-slate-dark hover:border-teal/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-slate-light mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-teal text-teal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-teal transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-teal transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
