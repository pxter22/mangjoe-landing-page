"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  index: number;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
  index,
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#ff6f00]/10"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Price Badge - Modern Design */}
        {price > 0 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-br from-[#ff6f00] to-[#ff8f00] text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-impact text-sm sm:text-base md:text-lg font-normal shadow-xl backdrop-blur-sm border-2 border-white/20"
          >
            ${price.toFixed(2)}
          </motion.div>
        )}

        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#ff6f00]/20 to-transparent rounded-br-full"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-white relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-4 sm:left-5 md:left-6 right-4 sm:right-5 md:right-6 h-px bg-gradient-to-r from-transparent via-[#ff6f00]/20 to-transparent"></div>
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-impact font-normal text-[#ff6f00] mb-2 sm:mb-3 leading-tight group-hover:text-[#ff8f00] transition-colors duration-300">
          {name}
        </h3>
        
        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-[#424242] leading-relaxed font-sans mb-3 sm:mb-4 line-clamp-2">
          {description}
        </p>

        {/* Bottom accent */}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-0.5 bg-gradient-to-r from-[#ff6f00] to-transparent flex-1"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff6f00]"></div>
          <div className="h-0.5 bg-gradient-to-l from-[#ff6f00] to-transparent flex-1"></div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6f00]/0 to-[#ff8f00]/0 group-hover:from-[#ff6f00]/5 group-hover:to-[#ff8f00]/5 transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
}
