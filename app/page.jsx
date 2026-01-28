"use client";

import FeaturesSection from "@/components/features";
import InteractiveStats from "@/components/interactive-stats";
import PricingSection from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Crop,
  Expand,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [demoHovered, setDemoHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tools = [
    { icon: Crop, label: "Crop" },
    { icon: Expand, label: "Resize" },
    { icon: SlidersHorizontal, label: "Adjust" },
    { icon: Sparkles, label: "AI Tools" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <div
          className={`transition-all duration-1000 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Create
            </span>
            <br />
            <span className="text-white">Without Limits</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional image editing powered by AI. Crop, resize, adjust
            colors, remove backgrounds, and enhance your images with
            cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/dashboard">
              <Button variant="primary" size="xl">
                Start Creating
              </Button>
            </Link>
            <Button variant="glass" size="xl">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Demo Interface */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          } ${demoHovered ? "scale-105 rotate-y-6" : ""}`}
          onMouseEnter={() => setDemoHovered(true)}
          onMouseLeave={() => setDemoHovered(false)}
          style={{ perspective: "1000px" }}
        >
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 min-h-96">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-gray-400 text-sm">Pixxel Pro</div>
              </div>

              {/* Tool Icons */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {tools.map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg bg-white/5 rounded-xl p-4 text-center
                               hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <Icon
                      className="w-7 h-7 mx-auto mb-2 text-cyan-400
                                 group-hover:text-purple-400
                                 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]
                                 transition-all"
                    />
                    <div className="text-xs text-gray-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Canvas */}
              <div className="flex items-center justify-center">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                  <div className="text-white font-bold">Your Canvas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="pt-36">
      <HeroSection />
      <InteractiveStats />
      <FeaturesSection />
      <PricingSection />

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Create Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to transform
            their images and bring their vision to life.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="xl">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default App;
