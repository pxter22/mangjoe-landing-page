"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-28 bg-[#F5F0E8] overflow-hidden"
    >
      {/* Mobile View - Stacked Layout (up to 768px) */}
      <div className="md:hidden container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] gap-4 sm:gap-6">
        {/* SEO H1 - Hidden visually but accessible */}
        <h1 className="sr-only">
          Mangjoe Mangjoes - Authentic Chicken Inasal NZ | Filipino Food New
          Zealand
        </h1>

        {/* LOVE - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight text-center"
          aria-hidden="true"
        >
          LOVE
        </motion.div>

        {/* Hero Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-0 w-full max-w-xs sm:max-w-md mx-auto"
        >
          <Image
            src="/menu/heropic.png"
            alt="Mangjoe Mangjoes Chicken Inasal - Authentic Filipino grilled chicken in New Zealand"
            width={1800}
            height={1800}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Descriptive Text - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-2 max-w-xs sm:max-w-sm text-center px-2"
        >
          <p className="text-xs sm:text-sm text-[#424242] leading-relaxed font-sans">
            At Mangjoe (Mangjoes), we bring authentic Chicken Inasal and
            Filipino food to New Zealand. Experience the best Inasal NZ has to
            offer - smoky, juicy Filipino grilled chicken you&apos;ll crave.
          </p>
        </motion.div>

        {/* KO TO - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl sm:text-5xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight text-center"
          aria-hidden="true"
        >
          KO TO
        </motion.div>
      </div>

      {/* Tablet/iPad View (768px - 1024px) */}
      <div className="hidden md:block lg:hidden container mx-auto px-6 relative w-full h-full min-h-[calc(100vh-6rem)] flex items-center justify-center">
        {/* SEO H1 - Hidden visually but accessible */}
        <h1 className="sr-only">
          Mangjoe Mangjoes - Authentic Chicken Inasal NZ | Filipino Food New
          Zealand
        </h1>

        {/* LOVE - Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[12%] left-6 z-10 pointer-events-none w-[200px]"
          aria-hidden="true"
        >
          <div className="text-5xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight w-full text-left">
            LOVE
          </div>
        </motion.div>

        {/* Hero Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-0 w-full max-w-4xl mx-auto px-4"
        >
          <Image
            src="/menu/heropic.png"
            alt="Mangjoe Mangjoes Chicken Inasal - Authentic Filipino grilled chicken in New Zealand"
            width={1800}
            height={1800}
            className="w-full h-auto object-contain max-h-[75vh]"
            priority
          />
        </motion.div>

        {/* Right Side Container - Descriptive Text + KO TO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-[20%] right-6 z-10 flex flex-col items-end gap-3 w-[200px]"
        >
          {/* Descriptive Text - Above KO TO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[240px] text-right"
          >
            <p className="text-xs text-[#424242] leading-relaxed font-sans">
              Mangjoe (Mangjoes) - Authentic Chicken Inasal NZ. Best Filipino
              food in New Zealand. Experience Inasal NZ with our smoky, juicy
              Filipino grilled chicken.
            </p>
          </motion.div>

          {/* KO TO */}
          <div
            className="text-5xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight w-full text-right pointer-events-none"
            aria-hidden="true"
          >
            KO TO
          </div>
        </motion.div>
      </div>

      {/* Laptop & Desktop View (1024px+) - Side-by-Side Layout */}
      <div className="hidden lg:block container mx-auto px-4 xl:px-8 2xl:px-12 relative w-full h-full min-h-[calc(100vh-7rem)] flex items-center justify-center">
        {/* SEO H1 - Hidden visually but accessible */}
        <h1 className="sr-only">
          Mangjoe Mangjoes - Authentic Chicken Inasal NZ | Filipino Food New
          Zealand
        </h1>

        {/* LOVE - Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[10%] left-8 xl:left-12 2xl:left-16 z-10 pointer-events-none w-[280px] xl:w-[350px] 2xl:w-[450px]"
          aria-hidden="true"
        >
          <div className="text-7xl xl:text-9xl 2xl:text-[12rem] font-normal text-[#ff6f00] leading-none font-impact tracking-tight w-full text-left">
            LOVE
          </div>
        </motion.div>

        {/* Hero Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-0 w-full max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12"
        >
          <Image
            src="/menu/heropic.png"
            alt="Mangjoe Mangjoes Chicken Inasal - Authentic Filipino grilled chicken in New Zealand"
            width={1800}
            height={1800}
            className="w-full h-auto object-contain max-h-[80vh]"
            priority
          />
        </motion.div>

        {/* Right Side Container - Descriptive Text + KO TO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-[18%] right-8 xl:right-12 2xl:right-16 z-10 flex flex-col items-end gap-2 xl:gap-3 2xl:gap-4 w-[280px] xl:w-[350px] 2xl:w-[450px]"
        >
          {/* Descriptive Text - Above KO TO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[200px] xl:max-w-[240px] 2xl:max-w-[280px] text-right"
          >
            <p className="text-[10px] xl:text-xs 2xl:text-sm text-[#424242] leading-relaxed font-sans">
              Mangjoe (Mangjoes) - Authentic Chicken Inasal NZ. Best Filipino
              food in New Zealand. Experience Inasal NZ with our smoky, juicy
              Filipino grilled chicken.
            </p>
          </motion.div>

          {/* KO TO */}
          <div
            className="text-7xl xl:text-9xl 2xl:text-[12rem] font-normal text-[#ff6f00] leading-none font-impact tracking-tight w-full text-right pointer-events-none"
            aria-hidden="true"
          >
            KO TO
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Delivery Truck Icon and Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden md:block container mx-auto px-4 sm:px-6 md:px-8 absolute bottom-8 lg:bottom-8 left-0 right-0 z-10"
      >
        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
          {/* Delivery Truck Icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#424242]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
            <circle cx="5.5" cy="17.5" r="2.5" />
            <circle cx="18.5" cy="17.5" r="2.5" />
          </svg>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#424242] font-sans">
            What are you craving today?
          </p>
        </div>
      </motion.div>

      {/* Scroll Down Arrow - Animated */}
      <a
        href="#menu"
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs sm:text-sm text-[#424242] font-sans uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
          Menu
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#ff6f00] group-hover:text-[#ff8f00] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </a>
    </section>
  );
}
