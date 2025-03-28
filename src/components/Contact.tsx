
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@arwinai.com',
      href: 'mailto:contact@arwinai.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9490937683',
      href: 'tel:+911234567890',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 animate-fade-in">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ready to <span className="text-gradient">Transform</span> Your Career?
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Reach out to us today to learn how our AI solutions can help you showcase your potential and land your dream job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card border-0 bg-white/5 p-8 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-primary min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 button-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-start group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass-card border-0 bg-white/5 p-8">
              <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation with our AI career specialists to explore how we can help you.
              </p>
              <Button 
                variant="outline" 
                className="w-full backdrop-blur-sm border border-white/20 bg-white/5 button-glow"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
