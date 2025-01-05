"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAppStore, FaGlobe, FaGooglePlay } from "react-icons/fa";

const projects = [
  {
    title: "Harmonie Signature",
    description:
      "Site web moderne pour un complexe de bowling et de loisirs, intégrant un système de réservation en ligne.",
    image: "/harmoniesignature.png",
    tags: ["PHP", "MySQL", "Blog", "Réservation"],
    website: "https://www.harmoniesignature.com/",
  },
  {
    title: "La Majuscule",
    description:
      "Plateforme professionnelle pour une entreprise de services en énergie et technologie.",
    image: "/lamajuscule.png",
    tags: ["Rendez-vous", "Services", "Réalisations"],
    website: "https://www.lamajuscule.com/",
  },
  {
    title: "STARSA",
    description:
      "Site vitrine pour une entreprise de services, avec un design moderne et adaptatif.",
    image: "/starsa.png",
    tags: ["WordPress", "UI/UX", "Responsive"],
    website: "https://gfatogo.com/starsa/",
  },
  {
    title: "Ekko Fleet Manager",
    description:
      "Application mobile simplifiée pour contrôler et gérer votre flotte en déplacement.",
    image: "/ekko-fleet-manager.png",
    tags: ["Flutter", "Gestion de flotte", "Efficacité", "Suivi"],
    appLinks: [
      {
        platform: "iOS",
        url: "https://apps.apple.com/fr/app/ekko-fleet-manager/id6590602360",
      },
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=ekko.munic.fleet.manager",
      },
    ],
  },
  {
    title: "Ekko Driver",
    description:
      "Plateforme tout-en-un pour les conducteurs, intégrant données véhicules et trajets pour des opérations efficaces.",
    image: "/ekko-driver.png",
    tags: ["Flutter", "Application mobile", "Conduite", "Performance"],
    appLinks: [
      {
        platform: "iOS",
        url: "https://apps.apple.com/fr/app/ekko-driver/id6501989300",
      },
    ],
  },
  {
    title: "IT Certs - IT Certifications",
    description:
      "Plateforme offrant des tests pratiques et des questions de certification pour aider les professionnels de l'informatique à préparer leurs examens.",
    image: "/it-certs.png",
    tags: ["Firebase", "Certification", "IT", "Professionnel"],
    appLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.vayesa.itcerts",
      },
    ],
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
      className="py-12 sm:py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Nos Projets Récents
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full dark:bg-background/50 dark:backdrop-blur-sm hover-lift">
                <div className="relative h-44 sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.website && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs sm:text-sm"
                        >
                          <FaGlobe className="mr-1 sm:mr-2" />
                          Visiter le site web
                        </a>
                      </Button>
                    )}
                    {project.appLinks &&
                      project.appLinks.map((link, i) => (
                        <Button key={i} asChild variant="outline" size="sm">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs sm:text-sm"
                          >
                            {link.platform === "iOS" ? (
                              <FaAppStore className="mr-1 sm:mr-2" />
                            ) : (
                              <FaGooglePlay className="mr-1 sm:mr-2" />
                            )}
                            {link.platform === "iOS"
                              ? "Voir sur l'App Store"
                              : "Voir sur Google Play"}
                          </a>
                        </Button>
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
