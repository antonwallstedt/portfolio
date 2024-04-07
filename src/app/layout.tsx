import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/ui/themeExporter.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Anton Wallstedt",
    default: "Anton Wallstedt",
  },
  description: "Portfolio website for Anton Wallstedt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
