"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Discord", 
      icon: MessageCircle, 
      href: "https://discord.com/harshul_90276", 
      color: "hover:text-indigo-400" 
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://x.com/HarshulCha47236", 
      color: "hover:text-blue-400" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/harshul-chawla-3b69b02b6/", 
      color: "hover:text-blue-500" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/harshul_chawla_1408/?hl=en", 
      color: "hover:text-pink-400" 
    },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative group">
                <Image
                  src="/logo-text.png"
                  alt="FotoFusion AI"
                  width={160}
                  height={40}
                  className="filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Professional image editing powered by AI. Create without limits with cutting-edge technology.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="w-10 h-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:transform group-hover:scale-110">
                    <social.icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md ${social.color}`}></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/editor"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  Editor
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api-docs"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest AI editing trends and tips delivered to your inbox.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="backdrop-blur-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 pr-12"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Join 10,000+ creators</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Glow Effect */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-16 h-16 backdrop-blur-lg bg-slate-900/50 border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} FotoFusion AI — All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;

