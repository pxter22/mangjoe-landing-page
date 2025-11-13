import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "px-8 py-4 rounded-full font-heading font-bold text-lg transition-all duration-300 shadow-xl cursor-pointer";
  const variantClasses =
    variant === "primary"
      ? "bg-flame-gradient text-white hover:shadow-2xl hover:scale-105 border-2 border-white/30"
      : "bg-bbq-red-warm text-white hover:bg-bbq-red-deep hover:shadow-2xl hover:scale-105";

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${className} inline-block`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
