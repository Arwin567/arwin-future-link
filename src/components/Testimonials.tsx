
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  university: string;
  quote: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Chen",
      role: "Data Scientist",
      university: "Stanford University",
      quote: "Arwin AI transformed my job search completely. Their AI resume optimization helped me land interviews at top tech companies, and I secured my dream role at Google.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "ML Engineer",
      university: "MIT",
      quote: "The interview simulator was incredibly realistic and helped me prepare for tough technical questions. The personalized feedback improved my confidence tremendously.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Aisha Johnson",
      role: "Product Manager",
      university: "UC Berkeley",
      quote: "The personal branding strategy Arwin AI developed for me helped me stand out in a crowded market. Within weeks, I received multiple offers from top companies.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 animate-fade-in">SUCCESS STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Real Results from <span className="text-gradient">Real Students</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hear from master students who used Arwin AI to elevate their professional profiles and secure positions at leading companies.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="glass-card border-0 bg-white/5 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-2 border-primary/20 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <Quote className="text-primary/50 mb-4 h-8 w-8" />
                        <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                        
                        <div>
                          <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                          <p className="text-muted-foreground">
                            {testimonial.role} | {testimonial.university}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full backdrop-blur-sm border border-white/20 bg-white/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full p-0 ${
                  activeIndex === index 
                    ? "bg-primary border-primary" 
                    : "bg-white/10 border-white/20"
                }`}
              />
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full backdrop-blur-sm border border-white/20 bg-white/5"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
