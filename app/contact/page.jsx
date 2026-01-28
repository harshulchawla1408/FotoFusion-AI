"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Send, 
  MessageCircle,
  Twitter, 
  Instagram, 
  Linkedin,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 500);
    const timer2 = setTimeout(() => setParticlesVisible(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className={`absolute inset-0 transition-opacity duration-2000 ${particlesVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Gradient Orbs */}
      <div className={`absolute inset-0 transition-opacity duration-2000 ${particlesVisible ? "opacity-50" : "opacity-0"}`}>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Get in Touch
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions, feedback, or want to share your creative journey, 
            our team is here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="primary" size="xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send us a Message
            </Button>
            <Button variant="glass" size="xl">
              <Mail className="w-5 h-5 mr-2" />
              support@fotofusion.ai
            </Button>
          </div>
        </div>

        {/* Floating Contact Icons */}
        <div
          className={`relative max-w-2xl mx-auto transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex justify-center space-x-8">
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email" },
              { icon: <MessageCircle className="w-6 h-6" />, label: "Chat" },
              { icon: <Phone className="w-6 h-6" />, label: "Call" },
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyan-400 mb-2">{item.icon}</div>
                <div className="text-white text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-2xl mx-auto px-6">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Send us a Message
              </span>
            </h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="backdrop-blur-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="backdrop-blur-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="backdrop-blur-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your project or question..."
                  rows={5}
                  className="backdrop-blur-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// Contact Info Section
const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "support@fotofusion.ai",
      description: "Get help with your account or technical issues"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Get instant help from our support team"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "San Francisco, CA",
      description: "Visit us for in-person meetings"
    }
  ];

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://x.com/fotofusionai",
      color: "hover:text-blue-400" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://linkedin.com/company/fotofusionai",
      color: "hover:text-blue-500" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com/fotofusionai",
      color: "hover:text-pink-400" 
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Other Ways to Reach Us
            </span>
          </h2>
          <p className="text-gray-400">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-4">
                <div className="text-white">{info.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-cyan-400 font-medium mb-2">{info.content}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
          <p className="text-gray-400 mb-8">
            Stay updated with the latest features, tips, and AI editing trends
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group relative"
                aria-label={social.name}
              >
                <div className="w-12 h-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:transform group-hover:scale-110">
                  <social.icon className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-white" />
                </div>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md ${social.color}`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-20 text-center relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-12">
          <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Creating?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using FotoFusion AI to transform their images.
          </p>
          <Button variant="primary" size="xl">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

// Main Contact Component
const Contact = () => {
  return (
    <div className="pt-36">
      <HeroSection />
      <ContactForm />
      <ContactInfo />
      <FinalCTA />
    </div>
  );
};

export default Contact;
