import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Hours from "@/components/Hours";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
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
      </Head>
      <main>
        <main className="min-h-screen">
          <Header />
          <Hero />
          <Menu />
          <About />
          <Testimonial />
          <Hours />
          <FAQ />
          <Footer />
        </main>
      </main>
    </>
  );
}
