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
  title: {
    template: "%s | Marvin Okongo Portfolio",
    default: "Marvin Okongo - Full Stack Developer",
  },
  description: "Portfolio of Marvin Okongo, a versatile full-stack developer specializing in web and mobile technologies.",
  keywords: [
    "Marvin Okongo",
    "Full Stack Developer", 
    "Web Development", 
    "Mobile Development", 
    "React", 
    "Next.js", 
    "Python"
  ],
  openGraph: {
    title: "Marvin Okongo - Full Stack Developer",
    description: "Checkout Marvin's professional portfolio showcasing his fullstack web and mobile software development expertise🔥",
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