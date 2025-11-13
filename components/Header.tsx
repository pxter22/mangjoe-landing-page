"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Hours", href: "#hours" },
    { name: "About Us", href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F5F0E8]/90 backdrop-blur-sm ${
        isScrolled ? "shadow" : ""
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="hidden lg:grid lg:grid-cols-3 items-center">
          {/* Logo on the left */}
          <div className="flex">
            <Link 
              href="#home" 
              onClick={() => scrollToSection("#home")} 
              className="flex items-center"
            >
              <Logo
                width={120}
                height={60}
                className="h-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation links in the center */}
          <div className="flex items-center justify-center gap-6 xl:gap-8 text-bbq-charcoal-dark">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm xl:text-base hover:text-bbq-orange-rich transition-colors font-medium link-underline"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact Us button on the right */}
          <div className="flex justify-end">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-5 xl:px-6 py-2 text-sm xl:text-base bg-bbq-orange-rich text-white font-semibold rounded-lg hover:bg-bbq-orange-fire transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Tablet layout (768px - 1024px) */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          <Link href="#home" onClick={() => scrollToSection("#home")}>
            <Logo
              width={110}
              height={55}
              className="h-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 text-bbq-charcoal-dark">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm hover:text-bbq-orange-rich transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-4 py-2 text-sm bg-bbq-orange-rich text-white font-semibold rounded-lg hover:bg-bbq-orange-fire transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="#home" onClick={() => scrollToSection("#home")}>
            <Logo
              width={90}
              height={45}
              className="h-auto sm:w-[100px] sm:h-[50px]"
              priority
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-bbq-charcoal-dark p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 flex flex-col gap-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#ff6f00]/10 p-4 sm:p-5"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 px-3 text-base sm:text-lg hover:text-bbq-orange-rich hover:bg-[#ff6f00]/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-1 px-4 py-3 text-base sm:text-lg bg-bbq-orange-rich text-white font-semibold rounded-lg hover:bg-bbq-orange-fire transition-colors text-center shadow-md"
              >
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
