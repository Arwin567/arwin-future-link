
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const orbitsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitsRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      orbitsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const animationItems = [
    { delay: 0, className: "animate-fade-in" },
    { delay: 0.1, className: "animate-fade-in" },
    { delay: 0.2, className: "animate-fade-in" },
    { delay: 0.3, className: "animate-fade-in" },
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background decorative elements */}
      <div ref={orbitsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="orbit w-[300px] h-[300px] opacity-30"></div>
        <div className="orbit w-[600px] h-[600px] opacity-20" style={{ animationDuration: '30s' }}></div>
        <div className="orbit w-[900px] h-[900px] opacity-10" style={{ animationDuration: '40s' }}></div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto z-10 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm" style={{ animationDelay: '0s' }}>
          <span className="text-sm font-medium text-primary animate-fade-in">Fueling Your Success with AI-Powered Solutions</span>
        </div>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Transform Your <span className="text-gradient">Career Journey</span> With Advanced AI
        </h1>
        
        <p 
          className="max-w-2xl mx-auto text-lg opacity-80 mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Arwin AI crafts intelligent AI solutions for businesses to showcase their potential and connect with their dream opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 button-glow"
          >
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="backdrop-blur-sm border border-white/20 bg-white/5 button-glow"
          >
            Explore Services
          </Button>
        </div>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
