import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mangjoe | Chicken Inasal NZ",
  description:
    "Authentic Bacolod Chicken Inasal in New Zealand. Mangjoe delivers smoky, juicy Filipino grilled chicken you'll crave.",
  keywords: [
    "Mangjoe",
    "Mang joes",
    "Chicken Inasal",
    "Chicken Inasal NZ",
    "Filipino grilled chicken",
  ],
  openGraph: {
    title: "Mangjoe | Chicken Inasal NZ",
    description:
      "Authentic Bacolod Chicken Inasal in New Zealand. Mangjoe delivers smoky, juicy Filipino grilled chicken you'll crave.",
    type: "website",
    url: "https://www.mangjoes.co.nz",
    siteName: "Mang Joes Chicken Inasal NZ",
    images: [
      {
        url: "https://www.mangjoes.co.nz/shop.JPG",
        width: 1200,
        height: 630,
        alt: "Mangjoe Chicken Inasal",
      },
    ],
  },
  other: {
    "article:publisher":
      "https://www.facebook.com/p/Mang-Joes-Chicken-Inasal-NZ-100063472661717/",
    "google-site-verification": "KCZAZeRKtHeuK40Q60CrIkN5Vhl7mZAmKdPUJoXsx30",
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
