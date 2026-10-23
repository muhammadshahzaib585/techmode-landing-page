import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { siteContent } from "@/content/copy";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080E17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
  description: siteContent.brand.shortDescription,
  applicationName: siteContent.brand.name,
  keywords: [
    "practical technology",
    "systems architecture",
    "software engineering",
    "industrial blueprint",
    "systems consultancy",
    "maintainable software",
  ],
  authors: [{ name: siteContent.brand.name }],
  creator: siteContent.brand.name,
  publisher: siteContent.brand.name,
  metadataBase: new URL("https://techmode.local"),
  openGraph: {
    title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
    description: siteContent.brand.shortDescription,
    siteName: siteContent.brand.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
    description: siteContent.brand.shortDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#080E17] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
