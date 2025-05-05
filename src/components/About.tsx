
import React from 'react';
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="mb-4">
              Hello! My name is [Your Name] and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at [Company] for a variety of clients.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {['JavaScript (ES6+)', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'NextJS'].map((tech) => (
                <div key={tech} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full mr-2"></div>
                  <span className="text-sm text-slate-light">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group animate-fade-in-up">
            <div className="relative rounded-md overflow-hidden border-2 border-teal z-10 max-w-xs mx-auto">
              <div className="aspect-square bg-slate-dark overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Profile" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-teal rounded-md z-0 group-hover:top-0 group-hover:right-0 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
