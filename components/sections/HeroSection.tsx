"use client";

import { ChevronDown } from "lucide-react";

export default function HeroAndAbout() {
  const backgroundUrl = "https://jets.partners/wp-content/uploads/2025/08/Firefly_Ultra-premium-private-jet-in-a-refined-cinematic-night-scene-_-inspired-by-Flexjet-b-278673XW-scaled-e1758720449553.png";

  return (
    <section
      id="home-about"
      className="relative min-h-screen flex flex-col justify-between pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.4), rgba(26, 35, 50, 0.6)), url('${backgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero content en haut */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-white font-light leading-tight">
            <span className="block text-6xl md:text-7xl lg:text-8xl mb-4">Private</span>
            <span className="block text-6xl md:text-7xl lg:text-8xl mb-4">aviation,</span>
            <span className="block text-6xl md:text-7xl lg:text-8xl">redefined.</span>
          </h1>
        </div>
      </div>

      {/* Contenu About en bas à droite */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="hidden lg:block"></div>

          <div className="text-white space-y-8 text-right">
            <div className="flex justify-end items-center gap-3">
              <span className="text-accent-blue text-lg font-light tracking-wider">Scroll To Explore</span>
              <ChevronDown className="text-accent-blue animate-bounce" size={24} />
            </div>

            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
              Our team brings decades of combined experience in global aviation, ensuring every mission is executed with precision, discretion, and trust.
            </p>

            <div className="flex justify-end">
              <button className="px-8 py-3 border-2 border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-primary-dark transition-all duration-300">
                Our Values
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator en bas au centre */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
