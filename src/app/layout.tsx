import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ideogrow - Agence de Développement Web & Mobile",
  description:
    "Transformez votre vision en réalité numérique avec Ideogrow. Nous créons des solutions web et mobiles innovantes pour propulser votre entreprise.",
  keywords: [
    "Ideogrow",
    "Développement Web",
    "Développement Mobile",
    "Agence Digitale",
    "Solutions Numériques",
    "Innovation Technologique",
  ],
  authors: [{ name: "Ideogrow", url: "https://ideogrow.com" }],
  creator: "Ideogrow",

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ideogrow.com",
    title: "Ideogrow - Agence de Développement Web & Mobile",
    description: "Transformez votre vision en réalité numérique avec Ideogrow.",
    images: [
      {
        url: "https://ideogrow.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ideogrow Logo",
      },
    ],
    site_name: "Ideogrow",
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "@ideogrow",
    creator: "@ideogrow",
    title: "Ideogrow - Agence de Développement Web & Mobile",
    description: "Transformez votre vision en réalité numérique avec Ideogrow.",
    images: ["https://ideogrow.com/twitter-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#62C1BF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
