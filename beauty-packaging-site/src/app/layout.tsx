import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteConfig } from "@/services/content.service";

export const metadata: Metadata = {
  title: "Jarsking - Professional Cosmetic Packaging Solutions",
  description: "Professional cosmetic packaging manufacturer offering glass bottles, plastic jars, tubes, and custom packaging solutions for beauty brands worldwide.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 获取站点配置
  let siteConfig;
  try {
    siteConfig = await getSiteConfig();
  } catch (error) {
    console.error('Failed to load site config:', error);
    siteConfig = { navigation: [] };
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header navigation={siteConfig.navigation} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
