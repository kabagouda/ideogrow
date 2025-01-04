'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FaRocket, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gray-200/50 dark:bg-gray-800/50 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6),transparent)]" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
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
            className="mb-8 inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#62C1BF]/10 backdrop-blur-md border border-[#62C1BF]/20 text-[#62C1BF]">
              <FaStar className="w-4 h-4 mr-2 text-yellow-400" />
              Agence de développement web & mobile
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
            Transformez Votre Vision en{' '}
            <span className="gradient-text font-extrabold animate-float">
              Réalité Numérique
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground"
          >
            Chez Ideogrow, nous créons des solutions web et mobiles innovantes qui propulsent votre entreprise vers de nouveaux sommets. De la conception à la réalisation, nous sommes votre partenaire de confiance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              asChild
              size="lg"
              className="text-lg bg-[#62C1BF] text-white hover:bg-[#62C1BF]/90 button-glow hover-lift"
            >
              <Link href="#contact">
                Démarrez votre projet
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-background/50 text-foreground border-[#62C1BF]/20 hover:bg-[#62C1BF]/10 backdrop-blur-md hover-lift"
            >
              <Link href="#services">
                <FaRocket className="mr-2" />
                Découvrez nos services
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-muted-foreground"
          >
            {[
              { number: "75+", label: "Projets Réalisés" },
              { number: "98%", label: "Clients Satisfaits" },
              { number: "24/7", label: "Support Client" },
              { number: "100%", label: "Engagement" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-glow text-foreground">{stat.number}</div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

