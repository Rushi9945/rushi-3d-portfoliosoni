"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/synchronicity", label: "Synchronicity" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full py-8 px-6 md:px-12 flex items-center justify-between z-50 relative">
      <Link href="/" className="font-display font-medium text-lg tracking-wide hover:text-accent transition-colors duration-300">
        RUSHI PRATIK SONI
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 text-sm">
        {links.map((link) => (
          <li key={link.href} className="relative">
            <Link
              href={link.href}
              className={`hover:text-accent transition-colors duration-300 ${
                pathname === link.href ? "text-text-primary font-medium" : "text-text-primary/70"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden p-2 -mr-2 text-text-primary"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
      </button>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-bg-base/95 backdrop-blur-sm border-b border-text-primary/10 px-6 py-8 md:hidden shadow-sm"
        >
          <ul className="flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block transition-colors duration-300 ${
                    pathname === link.href ? "text-accent font-medium" : "text-text-primary/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
