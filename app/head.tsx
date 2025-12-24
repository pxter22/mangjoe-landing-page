// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Mangjoe | Chicken Inasal NZ</title>
      <meta
        name="description"
        content="Mangjoe serves authentic Chicken Inasal in New Zealand. Visit us for the best Filipino grilled chicken experience."
      />
      <meta
        name="keywords"
        content="Mangjoe, Mang joes, Chicken Inasal, Chicken Inasal NZ, Filipino grilled chicken"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Mangjoe | Chicken Inasal NZ" />
      <meta
        property="og:description"
        content="Mangjoe serves authentic Chicken Inasal in New Zealand. Visit us for the best Filipino grilled chicken experience."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mangjoes.co.nz" />
      <meta
        property="og:image"
        content="https://www.mangjoes.co.nz/og-image.jpg"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mangjoe | Chicken Inasal NZ" />
      <meta
        name="twitter:description"
        content="Mangjoe serves authentic Chicken Inasal in New Zealand. Visit us for the best Filipino grilled chicken experience."
      />
      <meta
        name="twitter:image"
        content="https://www.mangjoes.co.nz/og-image.jpg"
      />

      {/* Google verification */}
      <meta
        name="google-site-verification"
        content="KCZAZeRKtHeuK40Q60CrIkN5Vhl7mZAmKdPUJoXsx30"
      />
    </>
  );
}
