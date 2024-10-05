import type { Metadata } from "next";
import { Inter, Handlee } from "next/font/google";

import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });
const handlee = Handlee({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Wedding",
  description: "Matthew and Valerie's wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={handlee.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
