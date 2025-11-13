"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  width = 64,
  height = 64,
  className = "",
  priority = false,
}: LogoProps) {
  // Try formats in order: PNG -> JPG -> WebP -> SVG
  const [currentFormat, setCurrentFormat] = useState(0);
  const formats = ["/Logo.png", "/Logo.jpg", "/Logo.webp", "/Logo.svg"];

  const handleError = () => {
    if (currentFormat < formats.length - 1) {
      setCurrentFormat(currentFormat + 1);
    }
  };

  // If all formats failed, show text fallback
  if (currentFormat === formats.length) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-white font-heading font-bold text-xl">
          MANG JOE&apos;S
        </div>
      </div>
    );
  }

  const logoPath = formats[currentFormat];

  return (
    <div className="relative flex items-center justify-center" style={{ width, height }}>
      {/* Use regular img for better error handling with fallbacks */}
      <img
        src={logoPath}
        alt="Mang Joe's Chicken Inasal Logo"
        width={width}
        height={height}
        className={`object-contain ${className}`}
        onError={handleError}
        style={{ maxWidth: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
