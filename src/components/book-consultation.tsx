"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function BookConsultation() {
  return (
    <section className="bg-card text-foreground py-8 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground px-2 sm:px-0">
            Réservez une consultation gratuite avec nos experts pour discuter de
            votre projet et découvrir comment nous pouvons vous aider à
            atteindre vos objectifs.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              <a
                href="https://wa.me/22890390387?text=Bonjour%2C%20je%20souhaite%20réserver%20une%20consultation%20pour%20discuter%20de%20mon%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2 text-base sm:text-lg" />
                Réserver une Consultation
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
