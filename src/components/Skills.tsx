
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  FileCode, 
  FileJson, 
  Database, 
  Server,
  Laptop
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: 'frontend' | 'backend' | 'other';
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 90, icon: Code, category: 'frontend' },
    { name: 'CSS', level: 85, icon: FileCode, category: 'frontend' },
    { name: 'JavaScript', level: 80, icon: FileJson, category: 'frontend' },
    { name: 'SQL', level: 75, icon: Database, category: 'backend' },
    { name: 'C++', level: 70, icon: FileCode, category: 'backend' },
    { name: 'Docker', level: 60, icon: Server, category: 'other' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend & Programming' },
    { id: 'backend', name: 'Backend & Database' },
    { id: 'other', name: 'DevOps & Tools' },
  ];

  return (
    <section id="skills" className="bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.id);
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category.id} className="animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-6 text-white">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <Card key={skill.name} className="bg-navy border border-slate-dark hover:border-teal/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-md bg-slate-dark mr-4">
                            <skill.icon className="h-6 w-6 text-teal" />
                          </div>
                          <h4 className="font-medium text-white">{skill.name}</h4>
                        </div>
                        <div className="space-y-2">
                          <Progress value={skill.level} className="h-2 bg-slate-dark" indicatorColor="bg-teal" />
                          <div className="flex justify-end">
                            <span className="text-sm text-slate-light">{skill.level}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
