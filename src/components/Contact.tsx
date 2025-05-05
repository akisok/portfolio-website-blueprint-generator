
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-navy-dark">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="section-heading mx-auto">Get In Touch</h2>
          <p className="text-slate-light mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="max-w-md mx-auto animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="bg-navy border-slate-dark text-slate focus:border-teal"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="bg-navy border-slate-dark text-slate focus:border-teal"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                required 
                rows={6}
                className="bg-navy border-slate-dark text-slate focus:border-teal resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-teal text-navy hover:bg-teal-dark"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
