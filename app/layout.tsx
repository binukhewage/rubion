import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; 
import { Analytics } from "@vercel/analytics/next"
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rubion.dev"),

  title: {
    default: "RuBion",
    template: "%s | RuBion",
  },

  description:
    "RuBion is a digital engineering studio designing and developing fast, scalable, and reliable websites and web applications for modern businesses.",

  keywords: [
    "web development agency",
    "web design studio",
    "custom website development",
    "high performance websites",
    "nextjs web development",
    "digital studio",
    "ruBion",
  ],

  authors: [{ name: "RuBion" }],
  creator: "RuBion",

  openGraph: {
    title: "RuBion",
    description:
      "We partner with forward-thinking companies to design and develop fast, scalable, and reliable web applications.",
    url: "https://www.rubion.dev",
    siteName: "RuBion",
    images: [
      {
        url: "/og-image.png", // add this image later
        width: 1200,
        height: 630,
        alt: "RuBion — Digital Engineering Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        <GoogleAnalytics />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
