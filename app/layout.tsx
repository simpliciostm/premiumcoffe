import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const metadataBase = new URL(siteConfig.siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.title,
    template: "%s | Café Aurora"
  },
  description: siteConfig.description,
  keywords: [
    "cafeteria",
    "café especial",
    "brunch",
    "doces artesanais",
    "cafeteria local",
    "landing page cafeteria"
  ],
  authors: [{ name: "Café Aurora" }],
  creator: "Café Aurora",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg" }]
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Café Aurora - Cafeteria Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} bg-aurora-offwhite font-body text-aurora-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
