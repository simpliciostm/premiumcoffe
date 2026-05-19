import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LocationHours } from "@/components/sections/location-hours";
import { MenuPreview } from "@/components/sections/menu-preview";

export default function Home() {
  return (
    <div className="min-h-screen bg-aurora-offwhite">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <MenuPreview />
        <Gallery />
        <LocationHours />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
