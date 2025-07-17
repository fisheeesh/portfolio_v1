import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  themeColor: "#3986FA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syp.dev"),
  title: "Swam Yi Phyo",
  description:
    "A passionate full-stack web developer focused on building SEO-friendly, responsive, and scalable web applications using React, Next.js, and Spring Boot. With a self-driven mindset and strong communication skills, he delivers clean, user-centered digital experiences.",
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/favicon.ico" },
    ],
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} id="root">{children}</body>
    </html>
  );
}
