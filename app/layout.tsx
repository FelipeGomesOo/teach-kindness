import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";

const playwrite = Indie_Flower({
  weight: ["400"],
  variable: "--font-handletter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teach Kindness",
  description: "Making the world a kinder place, one act at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playwrite.variable}  antialiased`}>
      <body className="bg-gradient-to-b from-blue-100 to-kindness-pink min-h-screen">
        {children}
      </body>
    </html>
  );
}
