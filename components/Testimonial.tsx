"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
  isLocalGuide: boolean;
  reviewCount: number;
  photoCount?: number;
  timeAgo: string;
  diningDetails: string;
  initial: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Cris de Alma Avelino",
    text: "Opening day! Avelino-Erbina Family definitely enjoyed our meals that day. Their grilled chicken was big and was cooked well, just the way I like it to be done... Waiting time wasn't that too long, it was all worth it...",
    rating: 5,
    avatar: "/menu/combo.jpg",
    isLocalGuide: false,
    reviewCount: 13,
    photoCount: 9,
    timeAgo: "2 weeks ago",
    diningDetails: "Dine in | Dinner | $20-30",
    initial: "C",
  },
  {
    id: 2,
    name: "Finedine Romance",
    text: "Been craving for a good ol inasal so had to Uber straight to mang Joe's for this they cook orders as they come so you know it's fresh comes as a set with veggies soup rice and sauce good value for money however the game changer for me is...",
    rating: 5,
    avatar: "/menu/inasal.jpg",
    isLocalGuide: true,
    reviewCount: 199,
    photoCount: 1562,
    timeAgo: "2 weeks ago",
    diningDetails: "Dine in | Lunch | $20-30",
    initial: "F",
  },
  {
    id: 3,
    name: "Angelo Perez",
    text: "I'd return to this place in a heartbeat. The food is phenomenal, every bite of the chicken and pork was packed with flavor and cooked to perfection. The menu is refreshingly simple, which only highlights how well they've mastered their...",
    rating: 5,
    avatar: "/menu/liempo.jpg",
    isLocalGuide: true,
    reviewCount: 53,
    photoCount: 106,
    timeAgo: "2 weeks ago",
    diningDetails: "Dine in | Lunch | $20-30",
    initial: "A",
  },
  {
    id: 4,
    name: "Patrick Francisco",
    text: "As a Filipino who only just recently moved abroad, this place gave me a fond reminder of home. Just ordering in Tagalog, for me, is part of the experience. The food of course is good and I'm not mad at the portions. The only thing people...",
    rating: 5,
    avatar: "/menu/combo.jpg",
    isLocalGuide: false,
    reviewCount: 6,
    timeAgo: "2 weeks ago",
    diningDetails: "Dine in | Lunch | $20-30",
    initial: "P",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/menu/background.jpg"
          alt="Restaurant Interior"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Google Reviews Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <a
            href="https://www.google.com/search?q=mangjoes&rlz=1C5CHFA_enNZ1044NZ1063&oq=mangjoes&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRhAMhcIAhAuGAoYCxiDARjHARixAxjRAxiABDIOCAMQLhgKGAsYsQMYgAQyEggEEC4YChiDARixAxiABBiKBTILCAUQLhgKGAsYgAQyCwgGEAAYChgLGIAEMggIBxAAGAMYCtIBCDEzNzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x6d0d4b98c9488ddd:0x9ae2e464eb2b5a8f,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Google Reviews</span>
            </div>
          </a>
          <p className="text-gray-400 text-sm">Real customer reviews from Google</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]"
        >
          {/* Google Review Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl w-full bg-[#2a2a2a] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl border border-gray-700/50 mx-4"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  {/* Profile Picture */}
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {testimonials[currentIndex].initial}
                    </div>
                    {testimonials[currentIndex].isLocalGuide && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full border-2 border-[#2a2a2a] flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Name and Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1 truncate">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      {testimonials[currentIndex].isLocalGuide && (
                        <span className="text-gray-400 text-xs sm:text-sm">Local Guide</span>
                      )}
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {testimonials[currentIndex].reviewCount} reviews
                        {testimonials[currentIndex].photoCount && (
                          <> · {testimonials[currentIndex].photoCount} photos</>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Three Dots Menu */}
                <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Rating and Time */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">{testimonials[currentIndex].timeAgo}</span>
                <span className="px-1.5 sm:px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600">
                  NEW
                </span>
              </div>

              {/* Dining Details */}
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                {testimonials[currentIndex].diningDetails}
              </p>

              {/* Review Text */}
              <p className="text-gray-200 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {testimonials[currentIndex].text}
                <button className="text-blue-400 hover:text-blue-300 ml-1">More</button>
              </p>

              {/* Interaction Buttons */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-700">
                <button className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-red-400 transition-colors group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">Hover to react</span>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg border-2 border-gray-600 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg border-2 border-gray-600 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

