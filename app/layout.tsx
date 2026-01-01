import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mangjoe | Mangjoes | Authentic Chicken Inasal NZ | Filipino Food NZ",
  description:
    "Authentic Bacolod Chicken Inasal in New Zealand. Mangjoe delivers smoky, juicy Filipino grilled chicken you'll crave. Best Filipino food NZ - Chicken Inasal, Inasal NZ.",
  keywords: [
    "Mangjoe",
    "Mangjoes",
    "Mang Joe",
    "Mang Joe's",
    "Chicken Inasal",
    "Inasal",
    "Inasal NZ",
    "Chicken Inasal NZ",
    "Filipino food NZ",
    "Filipino food New Zealand",
    "Filipino restaurant NZ",
    "Filipino grilled chicken",
    "Bacolod Chicken Inasal",
    "Filipino BBQ NZ",
    "authentic Filipino food",
    "Filipino cuisine New Zealand",
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
        url: "https://www.mangjoes.co.nz/foodtruck.JPG",
        width: 1200,
        height: 630,
        alt: "Mangjoe Mangjoes Chicken Inasal Food Truck - Authentic Filipino food NZ",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mang Joe's Chicken Inasal",
    alternateName: ["Mangjoe", "Mangjoes", "Mang Joe", "Mang Joe's"],
    description:
      "Authentic Bacolod Chicken Inasal in New Zealand. Mangjoe delivers smoky, juicy Filipino grilled chicken you'll crave. Best Inasal NZ and Filipino food in New Zealand.",
    image: "https://www.mangjoes.co.nz/foodtruck.JPG",
    servesCuisine: "Filipino",
    address: {
      "@type": "PostalAddress",
      streetAddress: "106 Ponsonby Road, Ponsonby",
      addressLocality: "Auckland",
      addressRegion: "Auckland",
      postalCode: "1011",
      addressCountry: "NZ",
    },
    telephone: "+642108156604",
    email: "hello@mangjoes.com",
    url: "https://www.mangjoes.co.nz",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
