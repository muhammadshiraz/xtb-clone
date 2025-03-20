import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer";
import Solutions from "@/components/sections/Solutions";
//import InvestmentPlans from "@/components/sections/InvestmentPlans";
// Import other sections

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Offer />
      <Solutions />
      {/* Add other sections */}
    </main>
  );
}
