import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const BASE_URL = "https://dinil-portfolio-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Aetozed Zero — Fullstack · AI · IoT",
    template: "%s | Aetozed Zero",
  },

  description:
    "Software engineer and researcher from Indonesia specializing in fullstack development, artificial intelligence, and embedded systems.",

  keywords: [
    "fullstack developer",
    "AI engineer",
    "IoT architect",
    "Next.js developer",
    "Python developer",
    "TensorFlow",
    "ESP32",
    "remote developer Indonesia",
    "Banda Aceh developer",
  ],

  authors: [{ name: "Aetozed Zero", url: BASE_URL }],

  creator: "Aetozed Zero",

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Aetozed Zero — Fullstack · AI · IoT",
    description:
      "I build intelligent systems — from embedded sensors to neural networks to the interfaces that connect them.",
    siteName: "Aetozed Zero Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aetozed Zero — Fullstack Developer · AI Engineer · IoT Architect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aetozed Zero — Fullstack · AI · IoT",
    description:
      "I build intelligent systems — from embedded sensors to neural networks to the interfaces that connect them.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
