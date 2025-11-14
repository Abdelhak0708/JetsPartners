"use client";

import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 25, 0.7), rgba(10, 15, 25, 0.8)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Empty or could add image */}
          <div className="hidden lg:block"></div>

          {/* Right side - Content */}
          <div className="text-white space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-accent-blue text-lg font-light tracking-wider">
                Scroll To Explore
              </span>
              <ChevronDown className="text-accent-blue animate-bounce" size={24} />
            </div>

            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              Our team brings decades of combined experience in global aviation,
              ensuring every mission is executed with precision, discretion, and
              trust.
            </p>

            <button className="px-8 py-3 border-2 border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-primary-dark transition-all duration-300">
              Our Values
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}