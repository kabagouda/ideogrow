"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaHeadset,
  FaLightbulb,
  FaPencilRuler,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: FaLightbulb,
    title: "Découverte",
    description:
      "Nous écoutons vos besoins et objectifs pour comprendre votre vision.",
  },
  {
    icon: FaPencilRuler,
    title: "Conception",
    description:
      "Nous créons des maquettes et des prototypes pour visualiser la solution.",
  },
  {
    icon: FaCode,
    title: "Développement",
    description:
      "Nous codons votre solution avec les meilleures pratiques et technologies.",
  },
  {
    icon: FaRocket,
    title: "Lancement",
    description:
      "Nous déployons votre projet et assurons une transition en douceur.",
  },
  {
    icon: FaHeadset,
    title: "Support",
    description:
      "Nous fournissons un support continu et des mises à jour régulières.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WorkProcess() {
  return (
    <section
      id="process"
      className="py-12 sm:py-20 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Notre Processus de Travail
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
            Notre approche méthodique garantit que chaque projet est livré avec
            la plus haute qualité, dans les délais et le budget impartis.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary text-primary-foreground rounded-full p-3 sm:p-4 mb-3 sm:mb-4 hover-lift transition-all duration-300">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base text-foreground">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
