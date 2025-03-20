import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer";
//import InvestmentPlans from "@/components/sections/InvestmentPlans";
// Import other sections

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Offer />
      {/* Add other sections */}
    </main>
  );
}
