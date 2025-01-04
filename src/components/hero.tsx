"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gray-200/50 dark:bg-gray-800/50 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6),transparent)]" />
      <div className="container mx-auto px-4 py-12 sm:py-24 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 inline-block"
          >
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#62C1BF]/10 backdrop-blur-md border border-[#62C1BF]/20 text-[#62C1BF] text-sm sm:text-base">
              <FaStar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400" />
              Agence de développement web & mobile
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-2">
            Transformez Votre Vision en{" "}
            <span className="gradient-text font-extrabold animate-float">
              Réalité Numérique
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto text-muted-foreground px-4"
          >
            Chez Ideogrow, nous créons des solutions web et mobiles innovantes
            qui propulsent votre entreprise vers de nouveaux sommets. De la
            conception à la réalisation, nous sommes votre partenaire de
            confiance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-4"
          >
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg bg-[#62C1BF] text-white hover:bg-[#62C1BF]/90 button-glow hover-lift w-full sm:w-auto"
            >
              <Link href="#contact">Démarrez votre projet</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg bg-background/50 text-foreground border-[#62C1BF]/20 hover:bg-[#62C1BF]/10 backdrop-blur-md hover-lift w-full sm:w-auto"
            >
              <Link href="#services">
                <FaRocket className="mr-2 w-4 h-4" />
                Découvrez nos services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-muted-foreground px-2"
          >
            {[
              { number: "75+", label: "Projets Réalisés" },
              { number: "98%", label: "Clients Satisfaits" },
              { number: "24/7", label: "Support Client" },
              { number: "100%", label: "Engagement" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-glow text-foreground">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
