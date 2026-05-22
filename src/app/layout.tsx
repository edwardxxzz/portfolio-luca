import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luca | Professor de História",
  description:
    "Portfolio profissional de Luca — Professor de História com especialização em História do Amazonas, História do Brasil e História Global. Mestre em oratória, amante de rock e defensor da educação acessível.",
  keywords: [
    "Professor de História",
    "História do Amazonas",
    "Cursinho Popular",
    "Educação",
    "Oratória",
    "Luca",
  ],
  authors: [{ name: "Luca" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Luca | Professor de História",
    description:
      "Portfolio profissional — História, Educação e Rock and Roll",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
