"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaComment, FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 gradient-text">
            Parlons de Votre Projet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à transformer votre vision en réalité ? Contactez-nous dès
            aujourd&apos;hui pour discuter de votre projet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-background/50 hover-lift focus:ring focus:ring-primary/50"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-background/50 hover-lift focus:ring focus:ring-primary/50"
                />
              </div>

              <div className="relative">
                <FaComment className="absolute left-3 top-4 text-muted-foreground" />
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-background/50 min-h-[150px] hover-lift focus:ring focus:ring-primary/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-bg-primary hover:opacity-90 transition-opacity button-glow text-white"
              >
                <FaPaperPlane className="mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
