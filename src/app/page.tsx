import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import Features from "@/components/features";
import AdditionalFeatures from "@/components/additional-features";
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Features />
      <AdditionalFeatures />
      <Roadmap />
    </div>
  );
}
