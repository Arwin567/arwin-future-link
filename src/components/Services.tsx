
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, UserCircle, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  index: number; 
}) => {
  return (
    <Card 
      className="relative group overflow-hidden p-8 glass-card border-0 bg-white/5 hover:bg-white/10 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
          <Icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Resume Optimization",
      description: "Our intelligent system analyzes job descriptions and optimizes your resume to maximize matching potential with ATS systems."
    },
    {
      icon: UserCircle,
      title: "Personal Branding Strategy",
      description: "Develop a compelling personal brand that stands out in the competitive job market with our AI-driven insights and recommendations."
    },
    {
      icon: GraduationCap,
      title: "Skills Gap Analysis",
      description: "Identify skill gaps between your current capabilities and your target role, with personalized learning recommendations."
    },
    {
      icon: Briefcase,
      title: "Interview Simulation & Coaching",
      description: "Practice with our AI interview simulator that provides real-time feedback and personalized coaching to improve your performance."
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 animate-fade-in">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Advanced AI Solutions for <span className="text-gradient">Career Success</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our cutting-edge AI technologies are designed Businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
