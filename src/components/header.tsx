"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Map old anchors to new IDs
  const navItems = [
    { label: "Services", id: "services" },
    { label: "Pourquoi nous", id: "why-us" },
    { label: "Projets", id: "projects" },
    { label: "Processus", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="header-footer-bg sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="Ideogrow Logo"
              width={150}
              height={40}
              className="hidden dark:block h-10 w-auto"
            />
            <Image
              src="/logo-light.png"
              alt="Ideogrow Logo"
              width={150}
              height={40}
              className="dark:hidden h-10 w-auto"
            />{" "}
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="#contact">Nous contacter</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/40"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
