import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://vextrixstudio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vextrix Studio | Custom Websites & Web Applications",
    template: "%s | Vextrix Studio",
  },
  description:
    "Vextrix Studio designs and develops custom websites and web applications for businesses looking to build a stronger online presence.",
  applicationName: "Vextrix Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vextrix Studio",
    title: "Vextrix Studio | Custom Websites & Web Applications",
    description:
      "Thoughtfully designed websites and web applications built around your business.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vextrix Studio | Custom Websites & Web Applications",
    description:
      "Custom websites and web applications for growing businesses.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}