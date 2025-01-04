'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/22890390387?text=Bonjour%2C%20je%20suis%20intéressé%20par%20vos%20services.%20Pouvons-nous%20en%20discuter%20%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contactez-nous sur WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-6 h-6" />
    </motion.a>
  )
}

