import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Lulla | Video Editor & Post-Production Specialist",
  description: "Award-winning video editor specializing in commercials, narrative films, and branded content. Cutting stories with rhythm and taste for major clients like Amazon Prime.",
  keywords: "video editor, post production, color grading, vfx, commercials, narrative films, sahil lulla, bitrate bash",
  authors: [{ name: "Sahil Lulla" }],
  openGraph: {
    title: "Sahil Lulla | Video Editor & Post-Production Specialist",
    description: "Award-winning video editor specializing in commercials, narrative films, and branded content.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
