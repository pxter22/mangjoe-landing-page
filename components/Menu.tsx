"use client";

import { useState } from "react";
import { menuItems } from "@/lib/constants";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

type Category = "Main" | "Special" | "Side";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Main");

  const categories: Category[] = ["Main", "Special", "Side"];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-[#F5F0E8] via-[#faf7f2] to-[#F5F0E8] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#ff6f00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#ff8f00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-base text-[#ff6f00] font-sans uppercase tracking-wider font-semibold">
              Discover
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight mb-4 sm:mb-6">
            OUR MENU
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#ff6f00]/40 to-[#ff6f00]/40 w-16 sm:w-20"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff6f00]"></div>
            <div className="h-px bg-gradient-to-l from-transparent via-[#ff6f00]/40 to-[#ff6f00]/40 w-16 sm:w-20"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#424242] leading-relaxed font-sans max-w-2xl mx-auto px-4">
            Mangjoe Mangjoes menu features authentic Chicken Inasal, Inasal NZ, and Filipino food. 
            Each dish is crafted with authentic Filipino flavors, grilled to perfection with our signature marinades and traditional techniques.
          </p>
        </motion.div>

        {/* Category Navbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center">
            <nav className="inline-flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-lg border border-[#ff6f00]/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-impact text-xs sm:text-sm md:text-base font-normal transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#ff6f00] text-white shadow-md scale-105"
                      : "text-[#424242] hover:text-[#ff6f00] hover:bg-[#ff6f00]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {filteredItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
