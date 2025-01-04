"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaFileInvoiceDollar,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";

const services = [
  {
    title: "Développement Web",
    description:
      "Sites vitrines élégants, plateformes e-commerce robustes et applications web sur mesure.",
    icon: FaGlobe,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Développement Mobile",
    description:
      "Applications iOS et Android performantes et intuitives pour une expérience exceptionnelle.",
    icon: FaMobileAlt,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Solutions CRM",
    description:
      "Systèmes de gestion de la relation client personnalisés pour optimiser vos interactions.",
    icon: FaChartLine,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Gestion de Boutiques",
    description:
      "Outils de gestion intégrés pour boutiques physiques et en ligne, simplifiant vos opérations.",
    icon: FaShoppingCart,
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    title: "Solutions pour Restaurants",
    description:
      "Systèmes de réservation en ligne, menus digitaux et applications de commande modernes.",
    icon: FaUtensils,
    gradient: "from-red-500 to-rose-400",
  },
  {
    title: "Gestion des Factures",
    description:
      "Logiciels de facturation automatisés pour rationaliser votre processus de paiement.",
    icon: FaFileInvoiceDollar,
    gradient: "from-indigo-500 to-blue-400",
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

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-20 bg-gradient-to-b from-background via-secondary/5 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4 gradient-text">
            Solutions Numériques
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Découvrez notre gamme complète de services numériques conçus pour
            propulser votre entreprise vers le succès.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover border-0 bg-gradient-to-br dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
                <CardHeader className="p-4 sm:p-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
