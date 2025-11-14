"use client";

import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    captcha: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* ===== SECTION BLANCHE AU DESSUS ===== */}
      <section className="w-full h-24 bg-white"></section>

      {/* ===== SECTION CONTACT ===== */}
      <section className="relative pt-10 pb-20 bg-[#eaf3fa] overflow-hidden">

        {/* Background dots blancs */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                {/* Points blancs */}
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 lg:gap-16 items-start">

            {/* COLUMN LEFT */}
            <div className="flex-1 max-w-xl mx-auto">
              <div className="mb-10">
                <p className="text-blue-600 text-sm font-light tracking-widest uppercase mb-3">
                  HAVE ANY QUESTIONS?
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
                  SPEAK WITH<br />OUR EXPERTS<br />TODAY
                </h2>
              </div>

              {/* CONTACT INFO GRID */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                
                {/* Address */}
                <div>
                  <h3 className="text-blue-600 text-sm font-light tracking-widest uppercase mb-3">
                    ADDRESS
                  </h3>
                  <div className="text-gray-600 text-xs leading-relaxed">
                    <p>15442 Ventura Blvd, Sherman Oaks,</p>
                    <p>CA 91403</p>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-blue-600 text-sm font-light tracking-widest uppercase mb-3">
                    PHONE
                  </h3>
                  <div className="space-y-1 text-gray-600 text-xs">
                    <p>
                      <a href="tel:+19739328950" className="hover:text-blue-600 transition">
                        +1 973 932 8950
                      </a>
                    </p>
                    <p>
                      <a href="tel:+14075281226" className="hover:text-blue-600 transition">
                        +1 407 528 1226
                      </a>
                    </p>
                  </div>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="text-blue-600 text-sm font-light tracking-widest uppercase mb-3">
                    FOLLOW US
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href="https://linkedin.com"
                      className="w-9 h-9 rounded border border-gray-400 flex items-center justify-center
                      text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="w-9 h-9 rounded border border-gray-400 flex items-center justify-center
                      text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Instagram className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-blue-600 text-sm font-light tracking-widest uppercase mb-3">
                    EMAIL
                  </h3>
                  <p className="text-gray-600 text-xs mb-1">Interested in our services?</p>
                  <a
                    href="mailto:hello@jets.partners"
                    className="text-gray-600 text-xs hover:text-blue-600 transition"
                  >
                    hello@jets.partners
                  </a>
                </div>

              </div>
            </div>

            {/* COLUMN RIGHT (FORM) */}
            <div className="w-full max-w-md bg-[#2c4968] rounded-lg p-6 shadow-xl relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-light mb-1 tracking-wide">
                GET IN TOUCH
              </h3>
              <p className="text-white/70 mb-4 text-xs">
                What better way to try out<br />our reaction time?
              </p>

              <div className="space-y-3">

                {/* Inputs */}
                {[
                  { label: "First Name", name: "firstName", placeholder: "John" },
                  { label: "Last Name", name: "lastName", placeholder: "Doe" },
                  { label: "Subject", name: "subject", placeholder: "Your subject" },
                  { label: "Email", name: "email", placeholder: "you@mail.com", type: "email" },
                  { label: "Phone", name: "phone", placeholder: "+X(XXX)XXX XXXX" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-white/80 text-xs mb-1 font-light">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/40 text-sm
                      py-1.5 focus:outline-none focus:border-white transition"
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-xs mb-1 font-light">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Us About Your Project"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/40 text-sm
                    py-1.5 focus:outline-none focus:border-white transition resize-none"
                  />
                </div>

                {/* Captcha */}
                <div>
                  <label className="block text-white/80 text-xs mb-1.5 font-light">
                    Captcha
                  </label>

                  <div className="flex items-center space-x-2 bg-white p-2.5 rounded">
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
                    />
                    <span className="text-gray-800 text-xs flex-1">I'm not a robot</span>
                    <div className="w-6 h-6 text-blue-600">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-1 text-right">
                    <a className="text-white/50 text-[10px] hover:text-white/70 transition">
                      Privacy - Terms
                    </a>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-[#2c4968] py-2.5 rounded font-light text-sm
                  hover:bg-blue-600 hover:text-white transition tracking-wide shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
