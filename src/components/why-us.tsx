"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaHeadset,
  FaLightbulb,
  FaRocket,
  FaUserClock,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUserClock,
    title: "Expertise technique approfondie",
    description:
      "Notre équipe possède une vaste expérience dans les dernières technologies web et mobiles.",
  },
  {
    icon: FaLightbulb,
    title: "Solutions personnalisées",
    description:
      "Nous créons des solutions sur mesure qui répondent parfaitement à vos besoins uniques.",
  },
  {
    icon: FaHeadset,
    title: "Support continu",
    description:
      "Notre engagement ne s'arrête pas au lancement. Nous offrons un support technique continu.",
  },
  {
    icon: FaRocket,
    title: "Technologie de pointe",
    description:
      "Nous utilisons les dernières technologies pour garantir des solutions performantes et évolutives.",
  },
  {
    icon: FaClock,
    title: "Respect des délais",
    description:
      "Nous nous engageons à livrer vos projets dans les temps, sans compromis sur la qualité.",
  },
  {
    icon: FaCheckCircle,
    title: "Approche centrée sur le client",
    description:
      "Votre satisfaction est notre priorité. Nous travaillons en étroite collaboration avec vous à chaque étape.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function WhyUs() {
  return (
    <section
      id="why-us"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-foreground">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-sm sm:text-base text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Chez Ideogrow, nous nous distinguons par notre engagement envers
            l&apos;excellence et l&apos;innovation. Voici pourquoi nous sommes
            le partenaire idéal pour votre succès numérique :
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start p-4 sm:p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
