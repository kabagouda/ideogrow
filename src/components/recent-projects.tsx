"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Harmonie Signature",
    description:
      "Site web moderne pour un complexe de bowling et de loisirs, intégrant un système de réservation en ligne",
    image: "/harmoniesignature.png",
    tags: ["PHP", "MySQL", "blog", "Système de Réservation"],
  },
  {
    title: "La Majuscule",
    description:
      "Plateforme professionnelle pour une entreprise de services en énergie et technologie",
    image: "/lamajuscule.png",
    tags: ["Prise de rendez-vous", "Services", "Realisations"],
  },
  {
    title: "STARSA",
    description:
      "Site vitrine pour une entreprise de services, avec un design moderne et responsive",
    image: "/starsa.png",
    tags: ["WordPress", "UI/UX", "Responsive"],
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

export default function RecentProjects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Nos Projets Récents</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes qui illustrent
            notre expertise et notre capacité à créer des solutions numériques
            innovantes.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full dark:bg-background/50 dark:backdrop-blur-sm hover-lift">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
