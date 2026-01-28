"use client";

import { useIntersectionObserver } from "@/hooks/use-landing-hooks";
import { useState } from "react";
import Image from "next/image";

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isHovered ? "scale-105 rotate-1 shadow-2xl shadow-purple-500/20" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="mb-6 flex items-center justify-center">
        <div className="relative w-14 h-14">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 text-center">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "/icons/crop.png",
      title: "Smart Crop & Resize",
      description:
        "Interactive cropping with aspect ratio constraints and intelligent resizing that preserves image quality across any dimension.",
    },
    {
      icon: "/icons/color.png",
      title: "Color & Light Adjustment",
      description:
        "Professional-grade brightness, contrast, saturation controls with real-time preview and auto-enhance capabilities.",
    },
    {
      icon: "/icons/background.png",
      title: "AI Background Removal",
      description:
        "Remove or replace backgrounds instantly using advanced AI that detects complex edges and fine details with precision.",
    },
    {
      icon: "/icons/ai-edit.png",
      title: "AI Content Editor",
      description:
        "Edit images with natural language prompts. Remove objects, change elements, or add new content using generative AI.",
    },
    {
      icon: "/icons/extend.png",
      title: "Image Extender",
      description:
        "Expand your canvas in any direction with AI-powered generative fill that seamlessly blends new content with existing images.",
    },
    {
      icon: "/icons/upscale.png",
      title: "AI Upscaler",
      description:
        "Enhance image resolution up to 4x using AI upscaling technology that preserves details and reduces artifacts.",
    },
  ];

  return (
    <section className="py-24" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, edit, and enhance images with
            professional-grade tools powered by cutting-edge AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
