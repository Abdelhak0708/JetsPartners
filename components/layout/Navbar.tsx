"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "EMPTY LEGS", href: "#empty-legs" },
  { label: "SALES & ACQUISITIONS", href: "#sales" },
  { label: "FLEET", href: "#fleet" },
  { label: "ABOUT", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CAREERS", href: "#careers" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#6c7d8d]/70 backdrop-blur-sm shadow-lg"
          : "bg-[#6c7d8d]/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://jets.partners/wp-content/uploads/2025/08/hgffh.png"
              alt="Jets Partners Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-sm font-medium hover:text-accent-blue transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-[#6c7d8d] transition-all duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#6c7d8d]/70 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-white text-sm font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="block w-full text-center px-6 py-3 border-2 border-white text-white text-sm font-medium hover:bg-white hover:text-[#6c7d8d] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
