
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-teal mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-white block">Your Name.</span>
            <span className="text-slate block mt-2">I build things for the web.</span>
          </h1>
          <p className="text-slate text-lg md:text-xl mb-8 max-w-xl">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-transparent border border-teal text-teal hover:bg-teal/10 px-6 py-6"
              size="lg"
            >
              Check out my work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-slate text-slate hover:border-teal hover:text-teal px-6 py-6"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
