"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Carousel slides data
const carouselSlides = [
  {
    id: 1,
    subtitle: "Our Story",
    title: "FROM A TRICYCLE GRILL TO A DREAM",
    paragraph:
      "Hello! I am Mang Joe. I was born and raised in Bacolod – The Chicken Inasal Capital of the Philippines. Mang Joe's story began on the streets of Bacoor Cavite in 2006 with nothing more than a small tricycle fitted with a charcoal grill. I cooked chicken inasal for anyone who passed by. I didn't have much—but I had a passion for food and a dream in my heart. Every piece of chicken I grilled carried the flavour of my hometown, the laughter of neighbours, and the hope that one day more people would taste what I grew up loving.",
    image: "/1.png",
    imageAlt: "Combo Meal - Grilled chicken and pork with rice",
  },
  {
    id: 2,
    subtitle: "Our Journey",
    title: "A NEW LAND, A NEW FIRE",
    paragraph:
      "When my family and I migrated to New Zealand, I brought nothing with me except determination and the memory of that smoky, savoury inasal. We started small—grilling in our backyard with a charcoal drum, then later moving into a food truck. No business experience, no guidebook, just courage and the belief that if we didn't try, we would never know. Sale by sale, week by week, we grew. We joined markets and events, setting up tents in the rain and learning the hard way that success isn’t always sunshine. We fell, we stood back up, and slowly people started coming—not just for the food, but for the story behind it. After two years, we expanded to a second setup, allowing us to attend two events in a weekend—one full truck, one compact system.",
    image: "/foodtruck.jpg",
    imageAlt: "Chicken Inasal - Traditional Filipino grilled chicken",
  },
  {
    id: 3,
    subtitle: "Our Milestone",
    title: "GROWING FLAMES, GROWING FAMILY",
    paragraph:
      "Then in September 2025, a milestone we once only dreamed of became real: Mang Joe opened its first physical shop in the Ponsonby International Food Court. From a tricycle in Bacoor Cavite to a kitchen in the heart of Auckland, this journey has always been about more than chicken—it has been about family, courage, and bringing the flavours of home to a new land. To everyone who has supported us, shared our food, and believed in the journey—Maraming Salamat. You are now part of our story.",
    image: "/shop.jpg",
    imageAlt: "Pork Liempo - Grilled pork belly",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel - 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 30 : -30,
    }),
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#F5F0E8]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Text Content - Left Side */}
            <div className="order-2 md:order-1 relative">
              {/* Decorative accent line - static */}
              <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#ff6f00] via-[#ff8f00] to-transparent opacity-60"></div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`text-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Title with modern styling */}
                  <div className="mb-6 sm:mb-7 md:mb-8">
                    {/* Small subtitle */}
                    <p className="text-xs sm:text-sm md:text-base text-[#424242] font-sans mb-2">
                      {carouselSlides[currentIndex].subtitle}
                    </p>

                    {/* Main title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#ff6f00] leading-none font-impact tracking-tight mb-3 sm:mb-4">
                      {carouselSlides[currentIndex].title}
                    </h2>

                    {/* Decorative underline */}
                    <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#ff6f00] to-transparent max-w-[100px] sm:max-w-[120px]"></div>
                  </div>

                  {/* Content */}
                  <div className="text-[#424242] leading-relaxed text-sm sm:text-base md:text-lg font-sans">
                    <p className="whitespace-pre-line">
                      {carouselSlides[currentIndex].paragraph}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image - Right Side */}
            <div className="order-1 md:order-2 relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`image-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    {/* Stacked background images */}
                    {[1, 2].map((offset) => {
                      const stackIndex =
                        (currentIndex - offset + carouselSlides.length) %
                        carouselSlides.length;
                      const stackDepth = offset;
                      return (
                        <motion.div
                          key={`stack-${stackIndex}-${currentIndex}`}
                          initial={{
                            opacity: 0.3,
                            scale: 0.9,
                            x: 0,
                            y: 0,
                            rotate: 0,
                          }}
                          animate={{
                            opacity: 0.9 - stackDepth * 0.1,
                            scale: 1 - stackDepth * 0.03,
                            x: stackDepth * -15,
                            y: stackDepth * -12,
                            rotate: stackDepth * -2,
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute inset-0"
                          style={{ zIndex: 9 - stackDepth }}
                        >
                          <div
                            className="w-full h-full bg-white p-3 md:p-4 lg:p-5"
                            style={{
                              boxShadow:
                                "0 15px 50px -10px rgba(0, 0, 0, 0.4), 0 8px 25px -5px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <div className="relative w-full h-full bg-black">
                              <Image
                                src={carouselSlides[stackIndex].image}
                                alt={carouselSlides[stackIndex].imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Active Image */}
                    <div className="absolute inset-0" style={{ zIndex: 10 }}>
                      <div
                        className="w-full h-full bg-white p-3 md:p-4 lg:p-5"
                        style={{
                          boxShadow:
                            "0 20px 60px -10px rgba(0, 0, 0, 0.5), 0 10px 30px -5px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <div className="relative w-full h-full bg-black">
                          <Image
                            src={carouselSlides[currentIndex].image}
                            alt={carouselSlides[currentIndex].imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                            priority={currentIndex === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation - Bottom */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handlePrev}
                className="bg-white/80 hover:bg-white text-[#ff6f00] p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Navigation Dots */}
              <div className="flex gap-1.5 sm:gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#ff6f00] w-6 sm:w-8"
                        : "bg-[#ff6f00]/30 hover:bg-[#ff6f00]/50 w-1.5 sm:w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-white/80 hover:bg-white text-[#ff6f00] p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
