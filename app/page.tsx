// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Hours from "@/components/Hours";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SEO: Visible content with keywords for search engines */}
      <div className="sr-only">
        <h1>
          Mang Joes Chicken Inasal NZ | Mang Joe | Chicken Inasal New Zealand
        </h1>
        <p>
          Mang Joes (Mang Joe&apos;s) serves authentic Chicken Inasal in New
          Zealand. Best Filipino food NZ - smoky, juicy grilled chicken inasal.
          Visit Mang Joes for authentic Filipino cuisine. Find Mang Joes, Mang
          Joe, Chicken Inasal, and Filipino food in New Zealand.
        </p>
      </div>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Testimonial />
      <Hours />
      <FAQ />
      <Footer />
    </main>
  );
}
