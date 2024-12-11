import type { Metadata } from "next";
import "./globals.css";

import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Pesos que você quer carregar
});
export const metadata: Metadata = {
  title: "Hermes dev",
  description: "Hermes Gabriel - Portifolio fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>{children}</body>
    </html>
  );
}
