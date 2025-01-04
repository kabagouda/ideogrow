'use client'

import { FaRocket, FaUsers, FaStar, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const stats = [
  { 
    icon: FaRocket,
    value: "75+",
    label: "Projets Lancés",
    gradient: "from-blue-500 to-cyan-400"
  },
  { 
    icon: FaUsers,
    value: "50+",
    label: "Clients Satisfaits",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: FaStar,
    value: "98%",
    label: "Taux de Satisfaction",
    gradient: "from-orange-500 to-yellow-400"
  },
  { 
    icon: FaClock,
    value: "2+",
    label: "Années d'Expérience",
    gradient: "from-green-500 to-emerald-400"
  }
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 dark:from-primary/40 dark:via-accent/40 dark:to-secondary/40 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="text-center p-6 rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover-lift">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} bg-opacity-20 dark:bg-opacity-40 flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-4xl font-bold mb-2 block text-foreground">{stat.value}</span>
                <span className="text-lg text-muted-foreground">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

