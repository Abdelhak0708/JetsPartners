"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#0a1929] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Column 1: Logo */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://jets.partners/wp-content/uploads/2025/08/Fichier-30-2.png" 
                  alt="Jets & Partners Logo"
                  className="h-50 w-auto"
                />
              </div>
            </div>

            {/* Column 2: Description */}
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-sm">
                Experience isn&apos;t claimed — it&apos;s proven. At Jets & Partners, we&apos;ve assembled a handpicked team of private aviation top performers who consistently rise above the rest. Their experience runs deep, their connections branch out, and their commitment to results is relentless.
              </p>
            </div>

            {/* Column 3: Sitemap */}
            <div>
              <h3 className="text-xl font-light mb-6 tracking-wide">Sitemap</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-white/60 hover:text-white transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="text-white/60 hover:text-white transition-colors text-sm">
                    Fleet
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-white/60 hover:text-white transition-colors text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Office */}
            <div>
              <h3 className="text-xl font-light mb-6 tracking-wide">Office</h3>
              <div className="space-y-4 text-white/60 text-sm">
                <p className="leading-relaxed">
                  15442 Ventura Blvd,<br />
                  Sherman Oaks, CA 91403
                </p>
                <div className="space-y-2">
                  <p>
                    <a 
                      href="tel:+19739328950" 
                      className="hover:text-white transition-colors"
                    >
                      +1 973 932 8950
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+14075281226" 
                      className="hover:text-white transition-colors"
                    >
                      +1 407 528 1226
                    </a>
                  </p>
                </div>
                <p>
                  <a 
                    href="mailto:HELLO@JETS.PARTNERS" 
                    className="hover:text-white transition-colors uppercase"
                  >
                    HELLO@JETS.PARTNERS
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200 py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © 2025 Jets & Partners. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-300 rounded text-gray-600 text-sm
              hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              LINKEDIN
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-300 rounded text-gray-600 text-sm
              hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white rounded-full p-4 shadow-lg hover:shadow-xl 
          transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 group z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" 
            strokeWidth={1.5} 
          />
        </button>
      </div>
    </>
  );
}