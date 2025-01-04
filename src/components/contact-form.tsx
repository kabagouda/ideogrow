"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaComment,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Add form status state
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setFormStatus("sent");
      // Reset form data
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (formStatus === "sent") {
    // Display success message
    return (
      <section
        id="contact"
        className="py-12 sm:py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <FaCheckCircle className="text-green-500 w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 gradient-text">
              Merci pour votre message!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Notre équipe vous contactera sous peu.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <Button
              onClick={() => setFormStatus("idle")}
              className="gradient-bg-primary hover:opacity-90 transition-opacity button-glow text-white text-base sm:text-lg py-2 sm:py-3"
            >
              Envoyer un autre message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 gradient-text">
            Parlons de Votre Projet
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Prêt à transformer votre vision en réalité ? Contactez-nous dès
            aujourd&apos;hui pour discuter de votre projet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg mx-auto px-4 sm:px-0"
        >
          <div className="bg-card/50 backdrop-blur-md p-4 sm:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-background/50 hover-lift focus:ring focus:ring-primary/50 w-full text-base sm:text-lg"
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
                  className="pl-10 bg-background/50 hover-lift focus:ring focus:ring-primary/50 w-full text-base sm:text-lg"
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
                  className="pl-10 bg-background/50 min-h-[120px] sm:min-h-[150px] hover-lift focus:ring focus:ring-primary/50 w-full text-base sm:text-lg"
                />
              </div>

              <Button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full gradient-bg-primary hover:opacity-90 transition-opacity button-glow text-white text-base sm:text-lg py-2 sm:py-3"
              >
                {formStatus === "sending" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Envoyer le message
                  </>
                )}
              </Button>

              {formStatus === "error" && (
                <p className="text-red-500 text-center mt-4">
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
