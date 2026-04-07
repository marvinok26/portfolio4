import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://marvin-okongo-portfolio.vercel.app"),
  title: {
    template: "%s | Marvin Okongo",
    default: "Marvin Okongo - Senior Software Engineer & Technical Lead",
  },
  description: "Portfolio of Marvin Okongo — Senior Software Engineer and Technical Lead specializing in Go (Golang) distributed systems, high-performance backend APIs, full-stack web, and cross-platform mobile development.",
  keywords: [
    "Marvin Okongo",
    "Senior Software Engineer",
    "Technical Lead",
    "Go Developer",
    "Golang",
    "Backend Engineer",
    "Distributed Systems",
    "Microservices",
    "Full Stack Developer",
    "Flutter",
    "React Native",
    "Node.js",
    "TypeScript",
    "DevOps",
    "Nairobi Kenya",
  ],
  openGraph: {
    title: "Marvin Okongo - Senior Software Engineer & Technical Lead",
    description: "Senior Software Engineer specializing in Go-based distributed systems, scalable microservices, and cross-platform mobile apps. Building production-grade solutions for fintech, healthcare, and social platforms.",
    url: "https://marvin-okongo-portfolio.vercel.app",
    siteName: "Marvin Okongo Portfolio",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}