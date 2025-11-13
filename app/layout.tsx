import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mang Joe's Chicken Inasal - Authentic Filipino BBQ",
  description:
    "Experience the vibrant flavors of authentic Filipino BBQ. Grilled to perfection, served with love.",
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
