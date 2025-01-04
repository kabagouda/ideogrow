import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="header-footer-bg border-t border-border/40">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-3 sm:mb-4 text-foreground">
              Ideogrow
            </h3>
            <p className="mb-3 sm:mb-4 text-muted-foreground">
              Votre partenaire en développement web et mobile
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Développement Web",
                "Développement Mobile",
                "Solutions CRM",
                "Gestion de Boutiques",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {["Accueil", "Services", "Projets", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={link === "Accueil" ? "/" : `#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              Contactez-nous
            </h4>
            <p className="text-muted-foreground">Email: contact@ideogrow.com</p>
            <p className="text-muted-foreground">Téléphone: +228 90 39 03 87</p>
            <p className="text-muted-foreground">
              Adresse: 123 Rue de l&apos;Innovation, Avedji Lomé
            </p>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/40 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ideogrow. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
