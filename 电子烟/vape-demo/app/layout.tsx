import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NEXVAP — Engineered to Elevate | Premium Vape Wholesale",
  description: "NEXVAP is a leading vape manufacturer for global B2B partners. NEXCORE™ chip technology, FLUXPOD™ pod platform. CE/FCC/TPD certified. MOQ from 10 units. OEM/ODM available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
