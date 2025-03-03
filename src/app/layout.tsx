// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { CombinedProvider } from "@/context/combined-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logo Maker",
  description: "This is a logo maker app which can be used to generate logos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} overflow-hidden m-4`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CombinedProvider>
              <Header />
              {children}
              <Analytics />
            </CombinedProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
