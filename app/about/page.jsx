"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Zap, 
  Palette, 
  Scissors, 
  Move,
  Brain,
  Rocket,
  Shield,
  Image as ImageIcon,
  Star
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

      {/* Neural Network Lines */}
      <div className={`absolute inset-0 transition-opacity duration-2000 ${particlesVisible ? "opacity-30" : "opacity-0"}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              About
            </span>
            <br />
            <span className="text-white">FotoFusion AI</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering creators with cutting-edge AI technology to transform their creative vision into reality. 
            We believe that professional image editing should be accessible, intuitive, and limitless.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/dashboard">
              <Button variant="primary" size="xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating with AI
              </Button>
            </Link>
            <Button variant="glass" size="xl">
              <Star className="w-5 h-5 mr-2" />
              Explore Features
            </Button>
          </div>
        </div>

        {/* Floating Photo Fragments */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ImageIcon className="w-6 h-6" />, label: "Enhance", color: "from-blue-500 to-cyan-500" },
              { icon: <Palette className="w-6 h-6" />, label: "Filters", color: "from-purple-500 to-pink-500" },
              { icon: <Scissors className="w-6 h-6" />, label: "Crop", color: "from-green-500 to-emerald-500" },
              { icon: <Move className="w-6 h-6" />, label: "Resize", color: "from-orange-500 to-red-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${item.color} rounded-xl p-3 mb-3 w-fit mx-auto`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <div className="text-white text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Who We Are Section
const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                FotoFusion AI is a revolutionary image editing platform that combines the power of artificial intelligence 
                with an intuitive, user-friendly interface. We're on a mission to democratize professional photo editing 
                by making advanced tools accessible to everyone.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our team of AI researchers, designers, and developers work tirelessly to bring you cutting-edge 
                technology that understands your creative vision and helps you achieve stunning results in seconds, 
                not hours.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Professional Quality</span>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/20 bg-black/30 flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="FotoFusion AI Technology"
                fill
                className="object-contain w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What We Do Section
const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "AI Crop & Resize",
      description: "Intelligent cropping that understands composition and automatic resizing with perfect aspect ratios.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Background Removal",
      description: "One-click background removal with edge-perfect precision for professional composites.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Enhancements",
      description: "Automatic color correction, lighting adjustments, and detail enhancement powered by AI.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Filters & AI Tools",
      description: "Artistic filters, style transfer, and generative AI effects to transform your images.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI-powered tools that cover every aspect of professional image editing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${feature.gradient} rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why FotoFusion AI Section
const WhyFotoFusion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const reasons = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Precision",
      description: "Advanced algorithms deliver professional results with minimal effort"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Intuitive Workflow",
      description: "Complete complex edits in seconds, not hours"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Designed for Creators",
      description: "Built for photographers, designers, and content creators"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Quality",
      description: "Studio-grade results every time"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why FotoFusion AI
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:translate-x-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 flex-shrink-0">
                  <div className="text-white">{reason.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
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
        <h2 className="text-5xl font-bold mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Transform Your Images?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of creators who are already using AI to bring their creative vision to life.
        </p>
        <Link href="/dashboard">
          <Button variant="primary" size="xl">
            <Sparkles className="w-5 h-5 mr-2" />
            Start Creating with AI
          </Button>
        </Link>
      </div>
    </section>
  );
};

// Main About Component
const About = () => {
  return (
    <main className="pt-32 bg-gradient-to-b from-[#0f172a] via-[#181c2a] to-[#1e293b] min-h-screen">
      <HeroSection />
      <section className="relative z-10">
        <WhoWeAre />
        <WhatWeDo />
        <WhyFotoFusion />
        <FinalCTA />
      </section>
    </main>
  );
};

export default About; 
