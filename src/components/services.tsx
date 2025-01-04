'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FaGlobe, FaMobileAlt, FaChartLine, FaShoppingCart, FaUtensils, FaFileInvoiceDollar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  { 
    title: "Développement Web",
    description: "Sites vitrines élégants, plateformes e-commerce robustes et applications web sur mesure.",
    icon: FaGlobe,
    gradient: "from-blue-500 to-cyan-400"
  },
  { 
    title: "Développement Mobile",
    description: "Applications iOS et Android performantes et intuitives pour une expérience exceptionnelle.",
    icon: FaMobileAlt,
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "Solutions CRM",
    description: "Systèmes de gestion de la relation client personnalisés pour optimiser vos interactions.",
    icon: FaChartLine,
    gradient: "from-green-500 to-emerald-400"
  },
  { 
    title: "Gestion de Boutiques",
    description: "Outils de gestion intégrés pour boutiques physiques et en ligne, simplifiant vos opérations.",
    icon: FaShoppingCart,
    gradient: "from-orange-500 to-yellow-400"
  },
  { 
    title: "Solutions pour Restaurants",
    description: "Systèmes de réservation en ligne, menus digitaux et applications de commande modernes.",
    icon: FaUtensils,
    gradient: "from-red-500 to-rose-400"
  },
  { 
    title: "Gestion des Factures",
    description: "Logiciels de facturation automatisés pour rationaliser votre processus de paiement.",
    icon: FaFileInvoiceDollar,
    gradient: "from-indigo-500 to-blue-400"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 gradient-text">Solutions Numériques</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services numériques conçus pour propulser votre entreprise vers le succès.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover border-0 bg-gradient-to-br dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

