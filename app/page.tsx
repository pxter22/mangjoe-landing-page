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
