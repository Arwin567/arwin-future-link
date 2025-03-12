
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        isScrolled ? "bg-white/10 backdrop-blur-xl shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-display text-gradient">Arwin AI</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Success Stories</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <Button 
            variant="outline" 
            className="button-glow backdrop-blur-sm border border-white/20 bg-white/5"
          >
            Get Started
          </Button>
        </div>
        
        <button onClick={toggleMobileMenu} className="md:hidden text-foreground">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 pt-20 px-6 md:hidden flex flex-col transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <a 
            href="#services" 
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Success Stories
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <Button 
            variant="outline" 
            className="my-4 button-glow backdrop-blur-sm border border-white/20 bg-white/5"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
