import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { CustomThemeProvider } from "@/theme/ThemeProvider";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "AI-Native Agentic Coding Bootcamp | Enterprise Software Development Training",
  description: "Transform your enterprise team with our AI-Native Agentic Coding Bootcamp. Learn to build enterprise-grade software without writing code. 2-3 day intensive course for software engineers and technical leads.",
  keywords: "AI-Native, Agentic Coding, Enterprise Software Development, No-Code Development, AI Programming, ACCSO, Bootcamp Training",
  authors: [{ name: "ACCSO & Dominic Systems" }],
  openGraph: {
    title: "AI-Native Agentic Coding Bootcamp | Enterprise Software Development Training",
    description: "Transform your enterprise team with our AI-Native Agentic Coding Bootcamp. Learn to build enterprise-grade software without writing code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans3.variable}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
