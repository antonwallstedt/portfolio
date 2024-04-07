import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
