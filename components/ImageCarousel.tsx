"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  altTexts?: string[];
}

export default function ImageCarousel({ images, altTexts = [] }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Safety check
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-[#F5F0E8] rounded-lg">
        <p className="text-[#424242]">No images available</p>
      </div>
    );
  }

  // Auto-play carousel (pauses on hover/interaction)
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex, images.length, isDragging]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = () => {
    const threshold = 50;
    const x = dragX.get();
    
    if (x > threshold) {
      handlePrev();
    } else if (x < -threshold) {
      handleNext();
    }
    
    setIsDragging(false);
    dragX.set(0);
  };

  const slideVariants = {
    enter: () => ({
      opacity: 1,
      zIndex: 10,
    }),
    center: {
      zIndex: 10,
      opacity: 1,
    },
    exit: () => ({
      zIndex: 1,
      opacity: 1,
    }),
  };

  const stackVariants = {
    hidden: { 
      opacity: 0.5, 
      scale: 0.9,
      rotate: 0,
      x: 0,
      y: 0,
    },
    visible: (index: number) => {
      // Progressive scale and opacity for 3D stack effect
      // Make cards more visible - less reduction in scale and opacity
      const scale = 1 - (index * 0.03); // Each card 3% smaller (minimal reduction)
      const opacity = 0.9 - (index * 0.1); // Very high opacity so cards are clearly visible
      
      // Fan pattern offsets - cards offset to left and up
      // First card behind: slight left and up
      // Second card behind: more left and up
      const xOffset = index * -15; // More visible offset
      const yOffset = index * -12; // More visible offset
      
      // Slight rotation for fan effect
      const rotation = index * -2; // Slight counter-clockwise rotation
      
      return {
        scale,
        opacity,
        x: xOffset,
        y: yOffset,
        rotate: rotation,
        zIndex: 9 - index, // Lower z-index for cards behind
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      };
    },
  };

  // Calculate which images should be visible in the stack
  // Always show 2 cards behind the active one for depth effect
  const getStackedImages = () => {
    const stack = [];
    const maxStack = 2; // Always show 2 cards behind
    for (let i = 1; i <= maxStack; i++) {
      const index = (currentIndex - i + images.length) % images.length;
      stack.push({ index, imageIndex: index, stackPosition: i });
    }
    return stack.reverse(); // Reverse so first item is furthest back
  };

  return (
    <div 
      ref={carouselRef}
      className="group relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
      onMouseEnter={() => setIsDragging(true)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Stacked Images Container */}
      <div className="relative w-full h-full overflow-visible">
        {/* Background stacked images - Always 2 cards */}
        {getStackedImages().map((item, stackIndex) => {
          // stackIndex 0 = furthest back (should be index 2), stackIndex 1 = closer (should be index 1)
          const stackDepth = 2 - stackIndex;
          return (
          <motion.div
            key={`stack-${item.imageIndex}-${currentIndex}`}
            custom={stackDepth}
            initial="hidden"
            animate="visible"
            variants={stackVariants}
            className="absolute inset-0"
            style={{
              transformOrigin: "center center",
            }}
          >
            {/* Polaroid frame - white border */}
            <div
              className="w-full h-full bg-white p-3 md:p-4 lg:p-5"
              style={{
                boxShadow: "0 15px 50px -10px rgba(0, 0, 0, 0.4), 0 8px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Image container inside frame */}
              <div className="relative w-full h-full bg-black">
                <Image
                  src={images[item.imageIndex]}
                  alt={altTexts[item.imageIndex] || `Image ${item.imageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  onError={(e) => {
                    console.error("Error loading image:", images[item.imageIndex]);
                  }}
                />
              </div>
            </div>
          </motion.div>
          );
        })}

        {/* Active Image with Slide Animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDrag={(_, { offset }) => dragX.set(offset.x)}
            onDragEnd={handleDragEnd}
            transition={{
              duration: 0,
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{
              transformOrigin: "center center",
            }}
          >
            {/* Polaroid frame - white border */}
            <div
              className="w-full h-full bg-white p-3 md:p-4 lg:p-5"
              style={{
                boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.5), 0 10px 30px -5px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Image container inside frame */}
              <div className="relative w-full h-full bg-black">
                <Image
                  src={images[currentIndex]}
                  alt={altTexts[currentIndex] || `Image ${currentIndex + 1}`}
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  draggable={false}
                  unoptimized
                  priority={currentIndex === 0}
                  onError={(e) => {
                    console.error("Error loading image:", images[currentIndex]);
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Always visible */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#ff6f00] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#ff6f00] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Navigation Dots - Less visible */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#ff6f00] w-6"
                : "bg-white/40 hover:bg-white/60 w-1.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

