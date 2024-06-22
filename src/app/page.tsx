import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Hero />
        <FeaturedSection />
        <WhyChooseUs />
      </main>
    </>
  );
}
