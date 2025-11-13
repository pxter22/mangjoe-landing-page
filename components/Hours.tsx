"use client";

import { motion } from "framer-motion";
import { openingHours, socialLinks } from "@/lib/constants";

export default function Hours() {
  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  return (
    <section
      id="hours"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-bbq-red-warm mb-3 sm:mb-4 drop-shadow-lg">
            Opening Hours
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-bbq-charcoal-dark font-semibold mb-2 sm:mb-3 px-4">
            Come visit us! We&apos;re here to serve you delicious Filipino BBQ
          </p>
          <p className="text-sm sm:text-base md:text-lg text-bbq-charcoal-dark font-medium px-4">
            <span className="font-semibold text-bbq-orange-rich">Note:</span> These hours are for our{" "}
            <span className="font-semibold">Ponsonby store only</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border-2 border-bbq-orange-rich/20">
            {days.map((day, index) => {
              const dayHours =
                openingHours[day.key as keyof typeof openingHours];
              const isToday =
                new Date().getDay() === (index === 6 ? 0 : index + 1);

              return (
                <motion.div
                  key={day.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-bbq-charcoal-dark/10 last:border-b-0 ${
                    isToday
                      ? "bg-flame-gradient/20 border-l-4 border-bbq-orange-rich"
                      : "hover:bg-amber-50/30"
                  } transition-colors`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <span
                      className={`font-heading font-bold text-sm sm:text-base md:text-lg ${
                        isToday ? "text-bbq-red-warm" : "text-bbq-charcoal-dark"
                      }`}
                    >
                      {day.label}
                      {isToday && (
                        <span className="ml-2 text-xs sm:text-sm text-bbq-orange-rich font-medium">
                          (Today)
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    {dayHours.closed ? (
                      <span className="text-bbq-red-deep font-heading font-semibold text-sm sm:text-base">
                        Closed
                      </span>
                    ) : (
                      <span className="text-bbq-charcoal-dark font-semibold text-sm sm:text-base">
                        {dayHours.open} - {dayHours.close}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-center px-4"
          >
            <p className="text-bbq-charcoal-dark font-semibold text-sm sm:text-base md:text-lg">
              For events, please check us out on our{" "}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bbq-orange-rich hover:text-bbq-orange-fire underline transition-colors"
              >
                Facebook page
              </a>
            </p>
          </motion.div>
      </div>
    </section>
  );
}
