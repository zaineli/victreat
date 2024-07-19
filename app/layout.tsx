import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";
import Nav from "@/components/custom/nav";

const fontSans = FontSans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Victreat | Treat you Cancer with Victory",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={cn(
        " noto-sans antialiased flex-col items-center justify-center m-0",
        // "  font-sans antialiased flex-col items-center justify-center m-0",
        // fontSans.variable

    )}>

{/* <Nav/> */}
        {children}
        </body>
    </html>
  );
}
