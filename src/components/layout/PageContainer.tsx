"use client";
import { motion } from "framer-motion";

export default function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 ${className}`}
    >
      {children}
    </motion.div>
  );
}
