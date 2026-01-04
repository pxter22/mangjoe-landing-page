import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Mang Joes Chicken Inasal NZ | Mang Joe | Chicken Inasal New Zealand | mangjoes",
  description:
    "Mang Joes (Mang Joe's) serves authentic Chicken Inasal in New Zealand. Best Filipino food NZ - smoky, juicy grilled chicken inasal. Visit Mang Joes for authentic Filipino cuisine.",
  keywords: [
    "Mang Joes",
    "Mang Joe",
    "Mang Joe's",
    "Mangjoe",
    "Mangjoes",
    "Chicken Inasal",
    "Chicken Inasal NZ",
    "Chicken Inasal New Zealand",
    "Inasal",
    "Inasal NZ",
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
    title:
      "Mang Joes Chicken Inasal NZ | Mang Joe | Chicken Inasal New Zealand",
    description:
      "Mang Joes (Mang Joe's) serves authentic Chicken Inasal in New Zealand. Best Filipino food NZ - smoky, juicy grilled chicken inasal. Visit Mang Joes for authentic Filipino cuisine.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    alternateName: [
      "Mang Joes",
      "Mang Joe",
      "Mang Joe's",
      "Mangjoe",
      "Mangjoes",
    ],
    description:
      "Mang Joes (Mang Joe's) serves authentic Chicken Inasal in New Zealand. Best Filipino food NZ - smoky, juicy grilled chicken inasal. Visit Mang Joes for authentic Filipino cuisine.",
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
    email: "marcuelofoodcorp.mjci@gmail.com",
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
