import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/ui/components/Cursor";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachin Pasi",
  description:
    "What I'm learning about shipping great products, becoming a better developer, and growing a career in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
